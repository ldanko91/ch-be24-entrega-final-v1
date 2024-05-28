import { Router } from "express";
import passport from "passport";
import { existsToken } from "../utils/jwt/jwtExistsToken.js";
import { passportCall } from "../utils/jwt/jwtPassportCall.js";
import loginController from "../controllers/login.controller.js";
import createHash from "../utils/bcrypt/bryptCreateHash.js";
import { generateNewPassToken } from "../utils/jwt/jwtNewPassToken.js";
import { newPassToken } from "../utils/jwt/jwtNewPassTokenCompare.js";
import MulterMiddleware from "../utils/middlewares/multer/multer.js";
const LoginController = new loginController()
const usersRouter = Router();
import Auth from "../utils/middlewares/loginAuth/Auth.js";

usersRouter.get('/', passportCall('jwt'), Auth('superAdmin','admin'), async (req, res) => {
    return await LoginController.rootGet(req, res)
})

usersRouter.get('/login', existsToken, async (req, res) => {
    return res.render('login', {
        title: `Acceso de usuarios`
    })
})

usersRouter.post('/login', async (req, res) => {
    return await LoginController.loginPost(req, res)
});

usersRouter.get('/current', passportCall('jwt'), async (req, res) => {
    return await LoginController.currentGet(req, res)
});

usersRouter.get('/register', (req, res) => {
    res.render('register', {
        title: `Formulario de registro`
    })
})

usersRouter.post('/register',
    passport.authenticate('register', {
        failureRedirect: '/users/fail-register',
    }), async (req, res) => {
        return await LoginController.registerPost(req, res)
    });

usersRouter.get('/logout', async (req, res) => {
    return await LoginController.logoutGet(req, res)
});


usersRouter.get('/fail-login', (req, res) => {
    res.json({ status: 'error', error: 'Login failed' })
})

usersRouter.get('/fail-register', (req, res) => {
    res.status(400).json({ status: 'error', error: 'Bad request' })
})


usersRouter.get('/recovery', async (req, res) => {
    return res.render('passRecovery', {
        title: `Reinicio de contraseña`
    })
})

usersRouter.post('/recovery', async (req, res) => {
    let newPassToken = await generateNewPassToken({ mail: req.body.email })
    await LoginController.recoveryEmailPost(req.body.email)
    res.cookie('newPassToken', newPassToken, {
        httpOnly: true,
    }).redirect('/api/users/recoveryRedirect');
}
);

usersRouter.get('/recoveryRedirect', newPassToken, async (req, res) => {
    return res.render('recoveryRedirect', {
        title: `Reinicio de contraseña`
    })
}
);

usersRouter.get('/continueRecovery', newPassToken, async (req, res) => {
    return res.render('continueRecovery', {
        title: `Reinicia tu contraseña`
    })
})

usersRouter.post('/continueRecovery', async (req, res) => {
    const cypherOldPass = await createHash(req.body.oldPasword)
    const cypherNewPass = await createHash(req.body.newPasword)
    console.log(cypherOldPass)
    await LoginController.resetPassword(req.body.email, cypherOldPass, cypherNewPass)

    return
})

usersRouter.get('/documents', passportCall('jwt'), async (req, res) => {
    let user = await LoginController.documentationGet(req, res)
    return res.render('documentationUpload',  {
        user,
        title: `Carga de documentación para Premium`
    })
}
);

usersRouter.post('/documents', passportCall('jwt'), MulterMiddleware('documents').array('files', 3), async (req, res) => {
    await LoginController.documentationUpload(req, res);
});

usersRouter.post('/premium/:uid', async (req, res) => {
    await LoginController.upgradeToPremium(req, res);
});

usersRouter.post('/profile', MulterMiddleware('profile').single('file'), async (req, res) => {
    await LoginController.updateProfileImg(req,res);
});

usersRouter.delete('/deactivate/:uid', async (req, res) => {
    await LoginController.deactivateUser(req, res);
});

export default usersRouter;