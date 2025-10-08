export const cartLocators={
   cartMenu:"xpath=//a[contains(text(), 'Cart')]",
   productTitlesOnCart:"xpath=//td/h4",
   productPricesOnCart:"xpath=//td[@class='cart_price']/p",
   productDeleteButtons:"xpath=//a[@class='cart_quantity_delete']",
   firstProductDeleteButton:"xpath=(//a[@class='cart_quantity_delete'])[1]",
   emptyCartSpan:"xpath=//span[@id='empty_cart']/p/b"
}
