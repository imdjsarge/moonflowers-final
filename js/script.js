(function () {
    
    // Add code to get the menu data using Ajax

$.ajax({
                type: "GET",
                 url: "data/menu.json",
                 dataType: "json",
                 success: function(buildMenu) {
                     console.log(coffeeShopApp.specials)
                 },
                 error: function() {
                     alert ("an ajax error occured.");
                 }                             
             });

    var coffeeShopApp = {
        buildMenu: function (data) {

            var $menu = $("#menu");
            $("<h3>Beverages</h3>").insertAfter($menu.children().last());
            $('<ul id="espresso">').insertAfter($menu.children().last());

            $("<h3>Bakery</h3>").insertAfter($menu.children().last());
            $('<ul id="bakery">').insertAfter($menu.children().last());
            
            

            
             
             
            // & add the menu items to the appropriate section
            // An example:
            // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

        },
        
            specials : function () {
            
            var specials = ("#specials");
            $("<p>").text("Bakery Goods 15% off!").insertAfter("h2");
            $("<p>").text("Drink of the week: Double Mint Mocha $3").insertAfter("h2")
    
            },

      

        // Add a method to validate the registration form
            
        
        // There should be both a name and a valid email (cannot be a blank email or the email is not in proper form!!!

    }

    // Uncomment the line below to build the menu
    coffeeShopApp.buildMenu();

    // Call the methods to add the weekly specials

    // Add code for the form submit button it should validate the form
    
      // Add a new method to add the weekly specials
    coffeeShopApp.specials();

    
    
    


}());