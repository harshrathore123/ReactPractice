@media (max-width: 991px) {
  /* Hide menu initially */
  .main-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #2a2a2a;
    width: 220px;
    border-top: 2px solid #343434;
    z-index: 999;
    transition: all 0.3s ease;
  }

  /* Show when .open is added */
  .main-menu.open {
    display: flex !important;
  }

  .main-menu ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .main-menu ul li {
    text-align: center;
  }

  .main-menu ul li a {
    color: #00CED1;
    padding: 10px;
    line-height: 40px;
    display: block;
  }

  .main-menu ul li a:hover {
    background-color: #00CED1;
    color: white;
  }

  .mobile-menu-btn {
    display: block;
    font-size: 28px;
    color: #00CED1;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .phone {
    display: none;
  }
}
