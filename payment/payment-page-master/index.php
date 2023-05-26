<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Payment</title>
        <link rel="stylesheet" href="normalize.css">
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <div class="full-screen">
            <div class="container">
                <div class="payment-box">
                    <section class="row options first">
                        <div class="item">
                            <label class="label">
                                <input class="radio" type="radio" name="channel">
                                <span class="radioInput"></span><span>PayPal</span>
                            </label>
                        </div>
                        <div class="item">
                            <img class="img" src="images/paypal.png" alt="" />
                        </div>
                    </section>
                    <section class="row options no-border-bottom">
                        <div class="item">
                            <label class="label">
                                <input class="radio" type="radio" name="channel" checked>
                                <span class="radioInput"></span><span>Debit/credit card</span>
                            </label>
                        </div>
                        <div class="item">
                            <img class="img" src="images/visa.png" alt="" />
                            <img class="img" src="images/master_card.png" alt="" />
                            <img class="img" src="images/jcb_card.png" alt="" />
                        </div>
                    </section>
                    <section class="row blanks">
                        <div class="col">
                            <div class="item">
                                <span class="title">Card number</span>
                                <input class="blank card-number" value="0000 0000 0000 0000" onFocus="this.value = ''" onBlur="if (this.value === '') { this.value = '0000 0000 0000 0000' }" onkeyup="if (this.value.length === 4 || this.value.length === 4 * 2 + 1 || this.value.length === 4 * 3 + 2) { this.value += ' ' }" onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength=19 required />
                            </div>
                        </div>
                    </section>
                    <section class="row blanks last">
                        <div class="col">
                            <div class="item">
                                <span class="title">Expiry</span>
                                <input class="blank" placeholder="MM/YY" onkeyup="if (this.value.length === 2) { this.value += '/' }" onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength=5 required />
                            </div>
                        </div>
                        <div class="col">
                            <div class="item">
                                <span class="title">CVC</span>
                                <input class="blank" placeholder="***" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength=3 required />
                            </div>
                        </div>
                        <img class="info-icon" src="images/info.png" alt="" />
                    </section>
                </div>
                <button class="payment-btn" type="button"><img src="images/lock.png" alt="" /><a href="http://localhost/4257/payment-successful-page-master/"><b>FINISH AND PAY</b></a></button>

<!-- menu -->
<head>
  <meta name="viewport" content="width=device-width">
</head>
<div class="wrap" style="margin-top:-3px">
<span class="decor"></span>
<nav>
  <ul class="primary">
   
 <li>
      <a href="http://localhost/4257/SHOPPING/payment-method.php"><b>BACK</b></a>
    </li>
    
  </ul>
</nav>
</div>
<div class="background">
<center><img src="bgz.jpg" width=38%></center>

</div>

            </div>
        </div>
    </body>
</html>