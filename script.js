document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const navbarCollapse = document.querySelector(".navbar-collapse");

        navLinks.forEach(link => {
          link.addEventListener("click", () => {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          });
        });
      });