const pg_weight = 1.04;
const vg_weight = 1.27;

// concetrate value update
const concentrate_pg = document.getElementById("concentrate_pg");
const concentrate_vg = document.getElementById("concentrate_vg");

function updateConcentrate_pg() {
    concentrate_vg.value = 100 - concentrate_pg.value 
};
    
function updateConcentrate_vg() {
    concentrate_pg.value = 100 - concentrate_vg.value
};

concentrate_pg.addEventListener("input", updateConcentrate_pg);
concentrate_vg.addEventListener("input", updateConcentrate_vg);

//nicotine value update

const nicotine_pg = document.getElementById("nicotine_pg");
const nicotine_vg = document.getElementById("nicotine_vg");

function updateNicotine_pg() {
    nicotine_vg.value = 100 - nicotine_pg.value 
};
    
function updateNicotine_vg() {
    nicotine_pg.value = 100 - nicotine_vg.value
};

nicotine_pg.addEventListener("input", updateNicotine_pg);
nicotine_vg.addEventListener("input", updateNicotine_vg);

//base value update

const pg_base = document.getElementById("pg_base");
const vg_base = document.getElementById("vg_base");

function updateBase_pg() {
    vg_base.value = 100 - pg_base.value 
};
    
function updateBase_vg() {
    pg_base.value = 100 - vg_base.value
};

pg_base.addEventListener("input", updateBase_pg);
vg_base.addEventListener("input", updateBase_vg);

// amout of base calculation 



