const validate = (schema)=>async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const status = 422;
      const message = "Fill in all the input field properly";
      console.log(err)
      const extraDetails = err.errors[0].message;
      
    console.log(extraDetails, "EXtra");
      const error = {
        status,
        message,
        extraDetails,
      };
      next(error);
    }
  };
  
  module.exports = validate;
  