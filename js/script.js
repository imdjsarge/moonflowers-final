(function () {



    var coffeeShopApp = {
        buildMenu: function (data) {

            var $menu = $("#menu");
            $("<h3>Beverages</h3>").insertAfter($menu.children().last());
            $('<ul id="espresso">').insertAfter($menu.children().last());

            $("<h3>Bakery</h3>").insertAfter($menu.children().last());
            $('<ul id="bakery">').insertAfter($menu.children().last());

            // Add code to get the menu data using Ajax
            // & add the menu items to the appropriate section
            // An example:
            // <li><span class="menu-item">Cappuccino $4.00</span><img src="images/cappuccino.jpg"></li>

        }

      

        // Add a method to validate the registration form
        // There should be both a name and a valid email

    }

    // Uncomment the line below to build the menu
    //coffeeShopApp.buildMenu();

    // Call the methods to add the weekly specials

    // Add code for the form submit button it should validate the form
    
      // Add a new method to add the weekly specials
        $("<p>").text("Bakery Goods 15% off!").insertAfter("#specials");
        $("<p>").text("Drink of the week: Double Mint Mocha $3").insertAfter("#specials");

}());