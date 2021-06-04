<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>&nbsp;&nbsp;&nbsp;&nbsp;
      <b-navbar-brand href="#">Planet Hotel</b-navbar-brand> 
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="#">Accomodation</b-nav-item>
          <b-nav-item href="#">Services</b-nav-item>
          
        <b-nav-item-dropdown text="Pages" right>
             <template v-slot:button-content>
                 <strong>Pages</strong>
             </template>
            <b-dropdown-item href="#">Celebrations</b-dropdown-item>
            <b-dropdown-item href="#">Functional Halls</b-dropdown-item>
            <b-dropdown-item href="#">Resturants</b-dropdown-item>
            <b-dropdown-item href="#">Bars</b-dropdown-item>
        </b-nav-item-dropdown>

          <b-nav-item href="#">Gallary</b-nav-item>
          <b-nav-item href="/tables">Celebrations</b-nav-item>
          <b-nav-item href="/customerlists">Customers</b-nav-item>
          <b-nav-item href="/contact">Contact Us</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
