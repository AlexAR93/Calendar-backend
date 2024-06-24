import { validationResult } from "express-validator";
//!ver documentación de validationResult
export const fieldValidator=(req,res,next)=>{
    const errors = validationResult ( req );
    
    if (!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        })
    }
    next()
}