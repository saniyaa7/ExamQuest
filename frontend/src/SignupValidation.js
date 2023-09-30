function Validation(values)
{
    let error={}
    const email_pattern=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.name ==="")
    {
        error.name="Name should not be empty"
    }
    else
    {
        error.name="";
    }

    if(values.email ==="")
    {
        error.email="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email address is not in valid format"
    }
    else
    {
        error.email="";
    }
    if(values.password ==="")
    {
        error.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password must be alphanumeric with atleast 8 character"
    }
    else
    {
        error.password="";
    }
    return error;
}
export default Validation;