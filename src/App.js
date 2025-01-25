/* ///////////////GLOBAL///////////////// */


.show{
  top: 0;
  display: flex;
  align-items: center;
  position: absolute;
  transition: all 0.2s ease-out;
  z-index: 12
}

.hide{
  top: -100px;
  position: absolute;
  transition: all 0.4s ease-out;
  z-index: 12
}



* {
  font-family: 'Amazon Ember', sans-serif;
  /* background-color: #232f3e; amazon color  */
}

#d-f {
  display: flex;
}

#d-g {
  display: grid;
}

#a-c {
  display: flex;
  align-items: center;
}

#j-c{
  display: flex;
  align-items: center;
  justify-content: center;
}

#between{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#around{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#wrap{
  display: flex;
flex-wrap: wrap;
}

#col{
   display: flex;
   flex-direction: column;
}

#abs{
  position: absolute;
}

#col-ce{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

#wrap {
  display: flex;
  flex-wrap: wrap;
}

#wrap-ce {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#t-a-c {
  text-align: center;
}

#c-p {
  cursor: pointer;
}

#red {
  color: red;
}

#my-color{
  color: white;
  background-color: #232f3e;
}

#center {
  display: flex;
  align-items: center;
  justify-content: center;
}

#text-center {
  text-align: center;
}

#no-a {
  color: black;
  text-decoration: none;
}

.c-p {
  cursor: pointer;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
}

.blue {
  color: #007185;
}

.col {
  display: flex;
  flex-direction: column;
}

.align {
  display: flex;
  align-items: center;
}

.between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}



.m-b {
  margin-bottom: 30px;
}

.line {
  border-bottom: 1px solid rgb(158, 158, 158);
}

.color-global {
  width: 60px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;
}





.whereAmI {
  display: flex;
  align-items: center;
}

.whereAmI a {
  text-decoration: none;
  color: grey;
  font-family: Georgia, 'Times New Roman', Times, serif;
}


/* header */

.header-icons{
  width: 43%;
  /* margin: -10px 0 -10px 0; */
}

/* body */
.body-banner{
  width: 100%;
}

.body-header-image {
  width: 100%;
}

body p,
a {
  font-size: 14px;
}

.body-all-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #E3E6E6;
  /* margin-top: -350px; */
  margin-top: -150px;
}

.body-box {
  /* width: 340px; */
  width: 240px;
  /* height: 400px; */
  height: 300px;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: white;
  /* margin: 10px; */
  margin: 5px;
}

.body-box a {
  text-decoration: none;
}

.body-box h5 {
  font-weight: bold;
}

.body-box img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
}

.body-main-banner{
  width: 100%;
}





/* //////////////////////////////////////body box small version for phone size */

.home-category{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  background-color: rgb(236, 236, 236);
}

.body-box-small {
  width: 160px;
  /* width: 50%; */
  /* height: 190px; */
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: white;
}


.test{
  width: 100%;
  display: flex;
  /* background-color: blue; */
}



.body-box-small img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  border-radius: 50%;
}

.body-box-small a {
  text-decoration: none;
  /* margin-left: -5px; */
}

.body-box-small h6 {
  font-weight: bold;
  /* margin-left: -5px; */
}


/* /////////////////////////////////////////////////////// */





/* ///////////////////////footer//////// */
.footer{
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #232f3e;
  color: white;
  /* margin: 0 -12px; */
  /* border-bottom: 1px solid rgb(158, 158, 158);
  border-bottom: 1px solid rgb(196, 41, 41); */
}

.footer-links{
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* //////////////////////////////// SIGNLE PRODUCT ////////////////////////////////// */

.single-product {
  /* width: 100%; */
  /* display: grid; */
  /* display: flex; */
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
}

.single-first-line{
  width: 100%;
  display: flex;
}

.single-product-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* first that contains two div in the right section  */
.single-product-login-and-all-the-information {
  width: 50%;
  display: flex;
  justify-content: space-around;
}

/* secend that contains two div in the left section  */
.single-product-images {
  width: 47%;
  display: flex;
  justify-content: space-around;
direction: rtl;
}

.others {
  width: 60px;
  height: 60px;
  display: grid;
  border-radius: 8px;
  border: 2px solid skyblue;
  margin: 10px;
}

.single-product-text-align {
  text-align: justify;
}

.single-product-color {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  /* border: 1px solid #007185; */
  cursor: pointer;
  border-radius: 50%;
}

/* ////////ends of meain */

.add-to-cart-button {
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid green;
  color: green;
display: flex;
align-items: center;
justify-content: center;
}

.personal-images {
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 15px;
}

.cart-products{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-decoration: none;
  background-color: violet;
}

.cart-map{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.compare-products{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-decoration: none;
}

.cart-a-tag{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  min-height: 500px;
}

.cart-button{
  background-color: rgb(255, 221, 0);
  padding: 8px 12px;
  border-radius: 20px;
}



/* ////////////////////////////order/////////////////////////// */

.order label {
  font-size: 13px;
}


/* //////////////////login/////////// */

.login-signOut {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 300px;
  height: 300px;
  border: 1px solid grey;
  display: grid;
  padding: 20px;
  margin: 20px;
}

.login button {
  background-color: rgb(255, 242, 0);
  border-radius: 10px;
  border: none;
  height: 35px;
  margin-top: 20px;
  padding: 5px;
}

.login button :hover {
  background-color: skyblue;
  width: 100%;
  height: 100%;
  ;
}



/* ////////////////products/////////////// */

/* .products {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */

.products-box {
  width: 300px;
  height: 500px;
  /* background-color: #E3E6E6; */
  background-color: white;
  margin: 3px;
  cursor: pointer;
  border: 1px solid grey;
  margin-top: 10px;
  padding: 10px;
}

.search{
  display: flex;
}

.products-box-search {
  display: flex;
  height: 250px;
  /* background-color: #E3E6E6; */
  cursor: pointer;
  border: 1px solid grey;
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
}

.products-box-search img {
  width: 200px;
  min-width: 200px;
  object-fit: contain;
}

.products-box img {
  width: 100%;
  height: 60%;
  object-fit: contain;
  background-color: white;
  margin-bottom: 10px;
}

.products-box:hover {
  cursor: pointer;
  filter: brightness(90%);
  transition: all 0.5s ease-out;
}

.products-count-main {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  text-align: center;
  margin-top: 40px;
  cursor: pointer;
  padding: 0 40px;
}
.products-count {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid orange;
  text-align: center;
  margin-top: 40px;
  cursor: pointer;
}

.best-seller-orange {
  width: 100px;
  border-right: 10px solid transparent;
  border-top: 27px solid rgb(244, 130, 0);
  border-radius: 5px 5px 0 0;
  margin-bottom: -10px;
  margin-left: 3px;
}

.best-seller-orange-none {
  width: 100px;
  border-left: 10px solid transparent;
  border-top: 27px solid transparent;
  border-radius: 5px 5px 0 0;
  margin-bottom: -10px;
  margin-right: 10px;
}

.best-seller-orange-text {
  margin-top: -24px;
  margin-left: 10px;
  color: white;
}


.hide-filter{
  display: none;
}
.show-filter{
  display: block;
}

/* ACCOUNT - LEFT  */
.left{
  background-color: grey;
  padding: 10px;
}

/* left menu */
.left-menu-products {
  border-left: 1px solid rgba(158, 158, 158, 50%);
  padding-top: 10px;
  background-color: rgb(250, 250, 250);
}

.left-menu-products a {
  text-decoration: none;
  color: #111111;
  padding-left: 10px;
}

.p-l-10 {
  padding-left: 10px;
}

.payment {
  display: grid;
  width: 300px;
  height: 44vh;
}

.payment button {
  background-color: rgb(0, 175, 0);
}

.loading {
  height: 100px;
  width: 100%;
  background-image: linear-gradient(to right,
      rgb(227, 227, 227) 0%,
      rgb(180, 178, 178) 25%,
      rgb(85, 84, 84) 50%,
      rgb(39, 39, 39) 100%);
  background-size: 200% 100%;
  animation: ani 1s linear infinite;
}

@keyframes ani {
  0% {
    background-position: 10%
  }

  50% {
    background-position: 150%
  }

  100% {
    background-position: 450%
  }
}

/* // find2  */
@media screen and (max-width: 1000px) {

  .header-icons{
    width: 100%;
  }

  .hide-filter{
    display: block;
  }
  .show-filter{
    display: none;
  }

  .search{
    display: grid;
  }

  .single-product-login-and-all-the-information {
    margin-top: 100px;
  }

  .product-card-body {
    justify-content: center;
  }

}

/* //////////////////////////////Shopify////////////// */

.gap-10 {
  gap: 10px;
}

.gap-15 {
  gap: 15px;
}

.gap-30 {
  gap: 30px;
}

/* Header   */

.input-groups{
  display: flex;
  height: 40px;
}

.blackModal{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 40%);
  transition: all 0.5s ease-out;
  z-index: 10;
  position: absolute;
}

.searchModal{
  width: 380px;
  height: 200px;
  /* left: 375px; */
  top: 60px;
  display: grid;
  background-color: white;
  color: black;
  transition: all 0.5s ease-out;
  z-index: 11;
  position: absolute;
  background-color: red;
}

.searchModalHidden{
  display: none;
  /* transition: all 0.5s ease-out; */
  /* color: transparent; */
  /* position: absolute; */

}

.cart-img{
  display: flex;
  flex-direction: column;
  margin-left: 6px;
}

.header-a-icons{
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 6px;
  gap: 6px;
}

.eesy-purchase {
  margin-top: -15px;
  font-size: 13px;
  color: lightgreen;
}

.header-items a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
}

/* ///////////////// end of the header /////////// */


/* Home */

.round-img{
  display: flex;
  justify-content: space-around;
}

.round-img img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
}


.brands-img{
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.home h4 {
  font-size: 70%;
}

.home-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.special {
  padding: 20px 0;
  background-color: palevioletred;
}

.special img {
  width: 300px;
}

.gray {
  background-color: var(--color-back);
}

.button {
  background-color: #232f3e;
  color: white;
  padding: 13px 33px;
  border-radius: 15px;
  text-decoration: none;
  font-family: arial;
}

.button:hover {
  background-color: var(--color-light-orange);
  /* color: black; */
}

.four-items {
  width: 49%;
}

/* Home Categories */

.categories {
  background-color: var(--color-white);
  box-shadow: 0 0 5px var(--color-shadow);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
}


/* BlogCard */

.blog-card {
  box-shadow: 0 0 5px var(--color-shadow);
  background-color: var(--color-white);
}

.blogcards {
  font-size: 26px;
}

.blog-card img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.blog-content {
  padding: 0 20px 15px 20px;
}

.date {
  color: var(--color-grey);
}

.desc {
  color: var(--color-grey);
}

/* Services */

.services {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.services p {
  margin-top: -10px;
}

/* ProductCart */

.product-desc {
  height: 30px;
  overflow-wrap: hidden;
}

.hidden {
  visibility: hidden;
}


.product-card .brand {
  font-size: 14px;
}

.product-card .product-title {
  font-size: 14px;
  font-weight: bold;
  font-family: arial;
}

.product-card:hover .action-bar {
  right: 20px;
}

.action-bar {
  transition: all 0.5s ease-out;
  top: 10%;
  right: -30px;
}

.product-card .product-image>img:last-child {
  display: none;
}

.product-card:hover .product-image>img:nth-child(1) {
  display: none;
}

.product-card:hover .product-image>img:last-child {
  display: block;
}

.product-card-body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.product-card {
  /* width: 280px; PREVIOUS STYLE - A LITTLE BIG */
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-white);
  padding: 10px;
  top: 5%;
  border-radius: 10px;
  box-shadow: 0 0 5px var(--color-shadow);
}

.product-image {
  width: 200px;
  /* width: 250px; PREVIOUS STYLE - A LITTLE BIG */
}

.product-image img {
  width: 100%;
  margin-bottom: 10px;
}

.product-image:hover {
  cursor: pointer;
}

.product-card-wish-icon {
  position: absolute;
  /* z-index: 2; */
  cursor: pointer;
}



/* SpecialProduc */

.special-product-card {
  width: 200px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: var(--color-white);
  margin: 3px;
  box-shadow: 0 0 5px var(--color-shadow);
}

/* Famous Card */

.famous-card .famous-content {
  top: 10%;
  left: 10%;
}

.famous-card {
  margin: 0 10px;
  box-shadow: 0 0 5px var(--color-shadow);
}

.fam-img {
  width: 333px;
  height: 500px;
  object-fit: contain;
  background-color: var(--color-white);
}

.famous-content h5 {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400px;
  /* color: white; */
  margin-bottom: 7px;
  text-transform: uppercase;
}

.famous-content h6 {
  font-size: 24px;
  line-height: 38px;
  font-weight: 500;
  /* color: white; */
}

.famous-content p {
  font-size: 16px;
  line-height: 24px;
  font-weight: 100;
  /* color: white; */
}

  /* product the two select option */

.grid img {
  width: 32px;
  height: 32px;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
}

.filter-sort-grid {
  padding: 5px;
  border-radius: 3px;
  background-color: var(--color-white);
}

.cross {
  top: 10px;
  right: 10px;
  width: 30px;
  padding: 6px;
  cursor: pointer;
}

.title {
  font-size: 13px;
}

/* /////////////////// I THINK IT'S SINGLE PRODUCT  */
.review {
  box-shadow: 0 0 5px var(--color-shadow);
}

.small-images img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid black;
}

.img-zoom {
  z-index: 1000;
}

.header-short{
  /* display: none; */
  align-items: center;
  justify-content: space-around;
}

/* .short-input{
  top: -40px;
  position: absolute
}

.hide-short-input{
  top: -40px;
  transition: all 0.5s ease-out;
  position: absolute
} */

@media screen and (max-width: 650px) {

  .search-div-width{
    width: 100%;
  }

  .search-form-width{
    width: 100%;
  }
  
  .search-input-width{
    width: 90%;
  }

  .header-long{
    display: none;
  }

 .header-short{
  display: flex;
} 




.searchModal{
  top: 115px;
}

.cart-short{
  top: 15px;
  width: 10px;
  height: 15px;
  font-size: small;
  color: red;
  background-color: white;
  margin-left: 2px;
  border-radius: 50%;
  position: absolute;
}

  .cart-map{
    display: grid;
  }

  .email-signup{
    display: grid;
  }

  .body-banner{
    width: 100%;
    /* height: 160px; */
    object-fit: cover;
  }

  .personal-images {
    width: 80px;
    height: 80px;
  }

  .single-product-login-and-all-the-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .single-product-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .single-product-images-others-div {
    display: flex;
    margin-top: 30px;
  }

  .home-images {
    display: flex;
    flex-direction: column;
  }

  .product-card-body {
    justify-content: center;
  }
}
