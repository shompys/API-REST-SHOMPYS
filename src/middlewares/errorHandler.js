
export const errorHandler = async (err,req,res,next) => {

    console.log(err);

    await res.status(err[0].status).json({
        errors: err
    })

    next();
}
