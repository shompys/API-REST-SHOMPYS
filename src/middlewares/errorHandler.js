
export const errorHandler = async (err, req, res, next) => {
    console.log(err);
    
    await res.status(400).json({
        status: 400,
        errors: err
    })
    next();
}