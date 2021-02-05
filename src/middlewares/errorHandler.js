
export const errorHandler = async (err, req, res, next) => {

    await res.json({
        status: 'error',
        message: err.message
    })
    next();
}