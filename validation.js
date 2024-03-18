function validpro() {
    let email = document.getElementById("inputemail").value;
    function validateemail(email) {
        var re = /\S+@S+\.\S+/;//to check the email contain @ and .
        return re.test(email);
    }
}