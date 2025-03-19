const ELEMENTS = [
  { symbol: "H", name: "Hydrogen", atomicMass: 1.008 },
  { symbol: "He", name: "Helium", atomicMass: 4.0026 },
  { symbol: "Li", name: "Lithium", atomicMass: 6.94 },
  { symbol: "Be", name: "Beryllium", atomicMass: 9.0122 },
  { symbol: "B", name: "Boron", atomicMass: 10.81 },
  { symbol: "C", name: "Carbon", atomicMass: 12.011 },
  { symbol: "N", name: "Nitrogen", atomicMass: 14.007 },
  { symbol: "O", name: "Oxygen", atomicMass: 15.999 },
  { symbol: "F", name: "Fluorine", atomicMass: 18.998 },
  { symbol: "Ne", name: "Neon", atomicMass: 20.18 },
  { symbol: "Na", name: "Sodium", atomicMass: 22.99 },
  { symbol: "Mg", name: "Magnesium", atomicMass: 24.305 },
  { symbol: "Al", name: "Aluminum", atomicMass: 26.982 },
  { symbol: "Si", name: "Silicon", atomicMass: 28.085 },
  { symbol: "P", name: "Phosphorus", atomicMass: 30.974 },
  { symbol: "S", name: "Sulfur", atomicMass: 32.06 },
  { symbol: "Cl", name: "Chlorine", atomicMass: 35.45 },
  { symbol: "Ar", name: "Argon", atomicMass: 39.948 },
  { symbol: "K", name: "Potassium", atomicMass: 39.098 },
  { symbol: "Ca", name: "Calcium", atomicMass: 40.078 },
  { symbol: "Sc", name: "Scandium", atomicMass: 44.956 },
  { symbol: "Ti", name: "Titanium", atomicMass: 47.867 },
  { symbol: "V", name: "Vanadium", atomicMass: 50.941 },
  { symbol: "Cr", name: "Chromium", atomicMass: 51.996 },
  { symbol: "Mn", name: "Manganese", atomicMass: 54.938 },
  { symbol: "Fe", name: "Iron", atomicMass: 55.845 },
  { symbol: "Co", name: "Cobalt", atomicMass: 58.933 },
  { symbol: "Ni", name: "Nickel", atomicMass: 58.693 },
  { symbol: "Cu", name: "Copper", atomicMass: 63.546 },
  { symbol: "Zn", name: "Zinc", atomicMass: 65.38 },
  { symbol: "Ga", name: "Gallium", atomicMass: 69.723 },
  { symbol: "Ge", name: "Germanium", atomicMass: 72.63 },
  { symbol: "As", name: "Arsenic", atomicMass: 74.922 },
  { symbol: "Se", name: "Selenium", atomicMass: 78.971 },
  { symbol: "Br", name: "Bromine", atomicMass: 79.904 },
  { symbol: "Kr", name: "Krypton", atomicMass: 83.798 },
  { symbol: "Rb", name: "Rubidium", atomicMass: 85.468 },
  { symbol: "Sr", name: "Strontium", atomicMass: 87.62 },
  { symbol: "Y", name: "Yttrium", atomicMass: 88.906 },
  { symbol: "Zr", name: "Zirconium", atomicMass: 91.224 },
  { symbol: "Nb", name: "Niobium", atomicMass: 92.906 },
  { symbol: "Mo", name: "Molybdenum", atomicMass: 95.95 },
  { symbol: "Tc", name: "Technetium", atomicMass: 98 },
  { symbol: "Ru", name: "Ruthenium", atomicMass: 101.07 },
  { symbol: "Rh", name: "Rhodium", atomicMass: 102.91 },
  { symbol: "Pd", name: "Palladium", atomicMass: 106.42 },
  { symbol: "Ag", name: "Silver", atomicMass: 107.87 },
  { symbol: "Cd", name: "Cadmium", atomicMass: 112.41 },
  { symbol: "In", name: "Indium", atomicMass: 114.82 },
  { symbol: "Sn", name: "Tin", atomicMass: 118.71 },
  { symbol: "Sb", name: "Antimony", atomicMass: 121.76 },
  { symbol: "Te", name: "Tellurium", atomicMass: 127.6 },
  { symbol: "I", name: "Iodine", atomicMass: 126.9 },
  { symbol: "Xe", name: "Xenon", atomicMass: 131.29 },
  { symbol: "Cs", name: "Cesium", atomicMass: 132.91 },
  { symbol: "Ba", name: "Barium", atomicMass: 137.33 },
  { symbol: "La", name: "Lanthanum", atomicMass: 138.91 },
  { symbol: "Ce", name: "Cerium", atomicMass: 140.12 },
  { symbol: "Pr", name: "Praseodymium", atomicMass: 140.91 },
  { symbol: "Nd", name: "Neodymium", atomicMass: 144.24 },
  { symbol: "Pm", name: "Promethium", atomicMass: 145 },
  { symbol: "Sm", name: "Samarium", atomicMass: 150.36 },
  { symbol: "Eu", name: "Europium", atomicMass: 151.96 },
  { symbol: "Gd", name: "Gadolinium", atomicMass: 157.25 },
  { symbol: "Tb", name: "Terbium", atomicMass: 158.93 },
  { symbol: "Dy", name: "Dysprosium", atomicMass: 162.5 },
  { symbol: "Ho", name: "Holmium", atomicMass: 164.93 },
  { symbol: "Er", name: "Erbium", atomicMass: 167.26 },
  { symbol: "Tm", name: "Thulium", atomicMass: 168.93 },
  { symbol: "Yb", name: "Ytterbium", atomicMass: 173.05 },
  { symbol: "Lu", name: "Lutetium", atomicMass: 174.97 },
  { symbol: "Hf", name: "Hafnium", atomicMass: 178.49 },
  { symbol: "Ta", name: "Tantalum", atomicMass: 180.95 },
  { symbol: "W", name: "Tungsten", atomicMass: 183.84 },
  { symbol: "Re", name: "Rhenium", atomicMass: 186.21 },
  { symbol: "Os", name: "Osmium", atomicMass: 190.23 },
  { symbol: "Ir", name: "Iridium", atomicMass: 192.22 },
  { symbol: "Pt", name: "Platinum", atomicMass: 195.08 },
  { symbol: "Au", name: "Gold", atomicMass: 196.97 },
  { symbol: "Hg", name: "Mercury", atomicMass: 200.59 },
  { symbol: "Tl", name: "Thallium", atomicMass: 204.38 },
  { symbol: "Pb", name: "Lead", atomicMass: 207.2 },
  { symbol: "Bi", name: "Bismuth", atomicMass: 208.98 },
  { symbol: "Po", name: "Polonium", atomicMass: 209 },
  { symbol: "At", name: "Astatine", atomicMass: 210 },
  { symbol: "Rn", name: "Radon", atomicMass: 222 },
  { symbol: "Fr", name: "Francium", atomicMass: 223 },
  { symbol: "Ra", name: "Radium", atomicMass: 226 },
  { symbol: "Ac", name: "Actinium", atomicMass: 227 },
  { symbol: "Th", name: "Thorium", atomicMass: 232.04 },
  { symbol: "Pa", name: "Protactinium", atomicMass: 231.04 },
  { symbol: "U", name: "Uranium", atomicMass: 238.03 },
  { symbol: "Np", name: "Neptunium", atomicMass: 237 },
  { symbol: "Pu", name: "Plutonium", atomicMass: 244 },
  { symbol: "Am", name: "Americium", atomicMass: 243 },
  { symbol: "Cm", name: "Curium", atomicMass: 247 },
  { symbol: "Bk", name: "Berkelium", atomicMass: 247 },
  { symbol: "Cf", name: "Californium", atomicMass: 251 },
  { symbol: "Es", name: "Einsteinium", atomicMass: 252 },
  { symbol: "Fm", name: "Fermium", atomicMass: 257 },
  { symbol: "Md", name: "Mendelevium", atomicMass: 258 },
  { symbol: "No", name: "Nobelium", atomicMass: 259 },
  { symbol: "Lr", name: "Lawrencium", atomicMass: 262 },
  { symbol: "Rf", name: "Rutherfordium", atomicMass: 267 },
  { symbol: "Db", name: "Dubnium", atomicMass: 270 },
  { symbol: "Sg", name: "Seaborgium", atomicMass: 271 },
  { symbol: "Bh", name: "Bohrium", atomicMass: 270 },
  { symbol: "Hs", name: "Hassium", atomicMass: 277 },
  { symbol: "Mt", name: "Meitnerium", atomicMass: 276 },
  { symbol: "Ds", name: "Darmstadtium", atomicMass: 281 },
  { symbol: "Rg", name: "Roentgenium", atomicMass: 282 },
  { symbol: "Cn", name: "Copernicium", atomicMass: 285 },
  { symbol: "Nh", name: "Nihonium", atomicMass: 286 },
  { symbol: "Fl", name: "Flerovium", atomicMass: 289 },
  { symbol: "Mc", name: "Moscovium", atomicMass: 290 },
  { symbol: "Lv", name: "Livermorium", atomicMass: 293 },
  { symbol: "Ts", name: "Tennessine", atomicMass: 294 },
  { symbol: "Og", name: "Oganesson", atomicMass: 294 },
];
jQuery.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    jQuery("<img>").attr("src", arguments[i]);
  }
};
let calculateMolecularMass = (f) => {
  let els = ELEMENTS.reduce((obj, x) => {obj[x.symbol] = x.atomicMass})
  let match;
  let mass = 0;
  while ((match = /([A-Z][a-z]*)(\d*)/g.exec(f)) !== null) {
    let element = match[1];
    let count = parseInt(match[2] || "1", 10);

    if (AM[element]) {
      mass += els[element] * count;
    } else {
      return null;
    }
  }
  return mass;
};
let get_icon = (icon, t = true) => {
  return t
    ? `/static/images/ui/${THEME_TYPE}/${icon}.png`
    : `/static/images/ui/${icon}.png`;
};
let resize_init = () => {
  let sections_resize = () => {
    let blocks = Math.floor(($(".layout-main-container").width() - 40) / 300);
    $(".cards-category, .tool-notifications").css(
      "width",
      blocks ? (blocks < 4 ? blocks * 300 + (blocks - 1) * 10 : 1240) : 300
    );
  };
  sections_resize();
  $(window).on("resize", sections_resize);
};
let cards_init = () => {
  $(".tool-cards-item").on("mouseup", (e) => {
    if (
      e.button == 0 &&
      !document.getSelection().toString() &&
      !$(e.target).hasClass("tool-cards-item-like")
    ) {
      location.href =
        "/" +
        $(e.currentTarget).attr("data-type") +
        "/" +
        $(e.currentTarget).attr("data-id") +
        "/";
    }
  });
  $.preloadImages(get_icon("heart-red", false), get_icon("heart-empty", false));
};
let panels_lists_init = () => {
  $(document).on("mouseup", ".tool-panel-list-item", (e) => {
    if (
      e.button == 0 &&
      !document.getSelection().toString() &&
      !$(e.target).hasClass("tool-panel-list-item-like")
    ) {
      location.href =
        "/" +
        $(e.currentTarget).attr("data-type") +
        "/" +
        $(e.currentTarget).attr("data-id") +
        "/";
    }
  });
};
let set_like = (data) => {
  let element = $(
    `.tool-cards-item[data-id="${data["id"]}"] > .tool-cards-item-like, .tool-panel-list-item[data-id="${data["id"]}"] > .tool-panel-list-item-like`
  );
  if (data["liked"]) {
    element.attr("src", get_icon("heart-red", false));
  } else {
    element.attr("src", get_icon("heart-empty", false));
  }
  if (data["liked"]) {
    $(`[data-panel-id="likes"] .tool-panel-list`).append(`
      <div class="tool-panel-list-item" data-id="${data["id"]}" data-type="${data["id"]}" data-liked="true">
        <img class="tool-panel-list-item-image" src="/static/db/structures/${data["id"]}.png" alt="">
        <img src="/static/images/ui/heart-red.png" alt="" class="tool-panel-list-item-like">
        <div class="tool-panel-list-item-information">
          <div class="tool-panel-list-item-information-name">${data["name"]}</div>
          <div class="tool-panel-list-item-information-extra">${data["name_iupac"]}</div>
        </div>
      </div>
      `);
  } else {
    $(`[data-panel-id="likes"] .tool-panel-list`).html(
      $.parseHTML($(`[data-panel-id="likes"] .tool-panel-list`).html()).filter(
        (el) =>
          el.attributes
            ? el.attributes["data-id"].value != data["id"] &&
              el.attributes["data-type"].value != data["type"]
            : false
      )
    );
  }

  $(
    `.tool-cards-item[data-id="${data["id"]}"], .tool-panel-list-item[data-id="${data["id"]}"]`
  ).data("liked", data["liked"]);
};
let likes_init = () => {
  $(document).on(
    "click",
    ".tool-panel-list-item-like, .tool-cards-item-like",
    (e) => {
      let data = $(e.currentTarget)
        .parents(".tool-panel-list-item, .tool-cards-item")
        .data();
      set_like(
        Object.assign(data, {
          name_iupac: data["nameIupac"],
          liked: !data["liked"],
        })
      );

      $.ajax({
        url: `/${data["type"]}/${data["id"]}/like`,
        method: "post",
        dataType: "json",
        data: { liked: data["liked"] },
        success: set_like,
      });
    }
  );
};
let notifications_init = () => {
  $(document).on("click", ".tool-notifications-item-remove", (e) => {
    $(e.currentTarget).parents(".tool-notifications-item").remove();
  });
};
let editable_substance_init = () => {
  let sections_resize = () => {
    let elements = $(".substance-editable-text");
    elements.css("height", "min-content");
    elements.get().forEach((element) => {
      element.value = element.defaultValue;
      $(element).css("height", element.scrollHeight);
    });
  };
  $(document).on("input resize", ".substance-editable-text", (e) => {
    $(e.currentTarget).css("height", "min-content");
    $(e.currentTarget).css("height", $(e.currentTarget).get(0).scrollHeight);
  });
  $(window).on("resize", sections_resize);
  sections_resize();

  $(document).on(
    "keyup",
    ".substance-characteristics-table .substance-characteristics-table-string.deletable .substance-editable-text",
    (e) => {
      if (e.key == "Delete" && $(e.currentTarget).val() == "") {
        $(e.currentTarget)
          .parents(".substance-characteristics-table-string")
          .remove();
      }
    }
  );
  $(".substance-characteristics-table-string-add").on("click", (e) => {
    $(e.currentTarget).parents(".substance-characteristics-table-string")
      .before(`
    <tr class="substance-characteristics-table-string deletable">
      <td>
        <textarea rows="1" class="substance-editable-text"  placeholder="DEL - удалить строку"></textarea>
      </td>
      <td>
        <textarea rows="1" class="substance-editable-text" placeholder="DEL - удалить строку"></textarea>
      </td>
    </tr>
      `);
  });
  $(".substance-category-source-add").on("click", () => {
    $(".substance-category-sources").append(`
      <li class="substance-category-sources-item">
        <textarea rows="1" class="substance-editable-text" placeholder="DEL, чтобы удалить пустое поле"></textarea>
      </li>
      `);
  });
  $(document).on(
    "keyup",
    ".substance-category-sources-item .substance-editable-text",
    (e) => {
      if (e.key == "Delete" && $(e.currentTarget).val() == "") {
        $(e.currentTarget).parents(".substance-category-sources-item").remove();
      }
    }
  );
  $(".substance-editable-save").on("click", () => {
    $(".substance-editable-data").submit();
  });
};
