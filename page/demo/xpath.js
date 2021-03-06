module.exports = {

    url: 'http://automationpractice.com/',
    button:{
        SignIn: '//div[@class="header_user_info"]',
        Create: '//i[@class="icon-user left"]',
        Register: '//button[@id="submitAccount"]',
        Login : '//span/i[@class ="icon-lock left"]',
        MyAccount: '//a[@title="Manage my customer account"]',
        addToCart: '//button[@class="exclusive"]',
        more: '(//span[text()="More"])[2]',
        checkOut: '//a[@title="Proceed to checkout"]',
        continue: '//i[@class="icon-chevron-left left"]',
        closeWindow: '//span[@title="Close window"]',
        cartCheckOut:'(//i[@class="icon-chevron-right right"]',
        chooseFile: '//input[@id="fileUpload"]'
    },
    field:{
        searchBar: '//input[@id="search_query_top"]',
        fieldLoginEmail: '//input[@id="email"]',
        fieldLoginPassw: '//input[@id="passwd"]',
        fieldCrtEmail: '//input[@id="email_create"]',
        fieldFirstName: '//input[@id="customer_firstname"]',
        fieldLastName: '//input[@id="customer_lastname"]',
        fieldPassWord: '//input[@id="passwd"]',
        fieldAddress: '//input[@id="address1"]',
        fieldCity: '//input[@id="city"]',
        fieldState: ' select[id=id_state]',
        fieldPostalCode: '//input[@id="postcode"]',
        fieldCountry: 'select[id=id_country]',
        fieldMobileNo: '//input[@id="phone_mobile"]',
        fieldAsgAnAddress: '//input[@id="alias"]',
        removeItemFirst: '(//input[@class="cart_quantity_input form-control grey"])[1]' ,
        size: '//select[@id="group_1"]',
        quantity: '//input[@id="quantity_wanted"]',
        checkBox: '//input[@id="cgv"]',
        subHeading: '//select[@id="id_contact"]',
        ordReference: 'select[name=id_order]',
        product: '(//div[@class="selector"]/select[@name="id_product"])[1]',
        message: '//textarea[@class="form-control"]',
    },
    text:{
        addSuccess: 'Product successfully added',
        titleHome: 'Women',
        titleSignIn: 'Sign in',
        label: 'Welcome to your account.',
        lblCreate: 'Create an account',
        txtPass: '12345',
        txtState: 'Alaska',
        txtPostalCode: '34612',
        txtCountry: 'United States',
        txtMobileNo: '098345123',
        accPasswd: '123456',
        resultSearch: "Showing",
        amountCart: '//span[@id="summary_products_quantity"]',
        subHeading: 'Webmaster',
        ordReference: 'VKBEBMGZN - 05/24/2021',
        product: 'Blouse - Color : White, Size : M',
        message: 'Thank you!',
        amountItems: '6 Products',
        color: 'pink',
        codeOrder: '(//a[@class="color-myaccount"])[1]',
        
    },
    btnColor: {
        yellow: '//a[@style="background:#F1C40F;"]',
        blue: '//a[@style="background:#5D9CEC;"]',
        orange: '//a[@style="background:#F39C11;"]',
        pink: '//a[@style="background:#FCCACD;"]', 
    },
    file:{
        fileImage: 'hus.png',
    }

    
}