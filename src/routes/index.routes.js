import homeRouter from "./homeRouter.routes.js"
import prodsRouter from "./prodsRouter.routes.js"
import cartsRouter from "./cartsRouter.routes.js"
import usersRouter from "./usersRouter.routes.js"
import chatRouter from "./dbChat.routes.js"
import testRouter from "./testRouter.routes.js"

const indexRouter = app => {
  app.use('/api/home', homeRouter)  
  app.use('/api/products', prodsRouter)
  app.use('/api/carts', cartsRouter)
  app.use('/api/users', usersRouter)
  app.use('/api/chat', chatRouter)
  app.use('/api/test', testRouter)
  }

export default indexRouter