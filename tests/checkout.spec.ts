
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Login, add item to cart, checkout, and order confirmation', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addFirstItemToCart();
  await products.goToCart();

  await cart.checkout();

  await checkout.fillInformation('Anu', 'KG', '560001');
  await checkout.finishCheckout();
  await checkout.orderConfirmation();
  await checkout.backHome();
});