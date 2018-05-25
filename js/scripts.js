
function User(name, email) {
    this.name = name;
    this.email = email
}
$(document).ready(function(){
    $("#myModal").modal('show');
    var user = new User();
    $("#login").click(function(e) {
        e.preventDefault();
        var name = $('#username').val();
        var email = $('#useremail').val();
        user.name = name;
        user.email = email;
        $("#myModal").modal('hide');
        $('#email').text(email);
        $('#name').text(name);
    })
    
});
