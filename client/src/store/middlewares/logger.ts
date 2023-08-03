export const loggerMiddlewares =
  (store: any) => (next: any) => (action: any) => {
    if (!action.type) {
      return next(action)
    }

    next(action)
  }
