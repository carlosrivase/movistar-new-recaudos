const ENVIRONMENT = process.env.REACT_APP_ENV || process.env.NODE_ENV;

//BACK_NODE
const url = {
    production: 'https://movistar.recaudo.epayco.co',
    development: 'https://movistar.recaudo.epayco.io',
    test: 'https://test.movistar.recaudo.epayco.io',
    local: 'http://localhost:3001',
}[ENVIRONMENT];


//FRONT
const urlFront = {
    production: 'https://movistar.recaudo.epayco.co',
    development: 'https://movistar.recaudo.epayco.io',
    test: 'https://test.movistar.recaudo.epayco.io',
    local: 'http://localhost:3000',
}[ENVIRONMENT];


//AMON
const amonServices = {
    production: "https://amon.epayco.co/api/movistar/recaudo",
    development: "https://amon.epayco.co/api/movistar/recaudo",
    test: "https://amon.epayco.io/api/movistar/recaudo",
    local: "https://amon.epayco.xyz/api/movistar/recaudo",
}[ENVIRONMENT];


//Suscripciones Construccion
const showSubscriptions = true;


// const showSubscriptions = true ;
const urlRecargas     = "https://movistar.recargas.epayco.co";
const movistar_key    = '479f29cc87cb26bdea89e873b5287784';
const urlMultimedia   = "https://multimedia.epayco.co/movistar-recaudo-react";
const checkOutPruebas = false;


/*** Recursos Rest Recaudo Epayco  */
//URLS DE CONSULTA Y APLICADO DE PAGOS
const EPAYCO_REST_RECAUDO_API_INVOICE = {
    production  : "https://secure.payco.co/recaudo/api/recaudo/proyecto/consultar/facturas",
    development : "https://secure2.epayco.io/recaudo/api/recaudo/proyecto/consultar/facturas",
    test        : "https://secure2.epayco.io/recaudo/api/recaudo/proyecto/consultar/facturas",
    local       : "https://secure.payco.io/recaudo/api/recaudo/proyecto/consultar/facturas",
}[ENVIRONMENT];


//LLAVES COMERCIOS MOVISTAR
const TELEBUCARAMANGA_KEY  = {
    production  : process.env.REACT_APP_TELEBUCARAMANGA_KEY,
    development : "b7f9d7522d9db328f1d71f5839984d45"
}[ENVIRONMENT];

const METROTEL_KEY         = process.env.REACT_APP_METROTEL_KEY;
const MOVISTAR_RECAUDO_KEY = process.env.REACT_APP_MOVISTAR_RECAUDO_KEY;

//URLS DE CONSULTA CHECKOUT PRINCIPAL
const EPAYCO_APP_CHECKOUT = {
    production   : "https://checkout.epayco.co/checkout.js",
    development  : "https://checkout.epayco.co/checkout.js",
    test         : "https://secure.epayco.io/checkout.preprod.js",
    local        : "https://secure.epayco.io/checkout.preprod.js",
}[ENVIRONMENT];

const REACT_APP_GEO_IP_URL = "https://apify-private.epayco.co/getip";

const REACT_APP_CHECKOUT_SUSCRIPTION = {
    production  : "https://checkout.epayco.co/checkout-suscripciones.js",
    development : "https://checkout-epayco.s3.amazonaws.com/test/checkout_pre.js",
    test        : "https://checkout-epayco.s3.amazonaws.com/test/checkout_test.js",
    // test        : "https://checkout-suscripciones.epayco.xyz/",
    local       : "https://checkout-epayco.s3.amazonaws.com/test/checkout_test.js"
}[ENVIRONMENT];

// const REACT_APP_CHECKOUT_TEST = process.env.NODE_ENV === "production" ? false : false;
const REACT_APP_CHECKOUT_TEST = false;

//.............................................. AMBIENTE DE LOS ENDPOINTS
const REACT_APP_AMBIENTE = {
    production    : "https://secure.payco.co/recaudo",
    development   : "https://secure2.epayco.io/recaudo",
    test          : "https://secure2.epayco.io/recaudotest",
    local         : "https://secure2.epayco.io/recaudotest",
}[ENVIRONMENT];//.........................................................


// .......................................................... LLAVE PÚBLICA
const REACT_APP_MOVISTAR_RECAUDO_PUBLIC_KEY = {
    production    :"479f29cc87cb26bdea89e873b5287784",
    development   :"f01722215916a56afbae605d0072d673",
    test          :"c3965ca845bb217800c94c780c2f085c",
    local         :"c3965ca845bb217800c94c780c2f085c"
}[ENVIRONMENT];//..........................................................


// ............................................... URL CONSULTA FACTURAS FS
const REACT_APP_MOVISTAR_DOMINIO_FACTURAS = {
    production    :"https://movistar.epayco.me/recaudo/fullstack",
    development   :"https://reviewkarina.epayco.io/recaudo/suscripcionfs3",
    test          :"https://pruebaskari.epayco.io/recaudo/domiciliacionfs",
    local         :"https://pruebaskari.epayco.io/recaudo/domiciliacionfs"
}[ENVIRONMENT];//..........................................................

// .............................................. URL CONSULTA FACTURAS SCL
const REACT_APP_MOVISTAR_DOMINIO_FACTURAS_SCL = {
    production    :"https://movistar.epayco.me/recaudo/scl",
    development   :"https://reviewkarina.epayco.io/recaudo/suscripcionscl4",
    test          :"https://pruebaskari.epayco.io/recaudo/domiciliacionscl",
    local         :"https://pruebaskari.epayco.io/recaudo/domiciliacionscl"
}[ENVIRONMENT];// .........................................................

// ............................................ DOMINIO CONFIGURADO RECADUO
const REACT_APP_MOVISTAR_DOMINIO = {
    production    :"https://movistar.epayco.me",
    development   :"https://reviewkarina.epayco.me",
    test          :"https://pruebaskari.epayco.io",
    local         :"https://pruebaskari.epayco.io"
}[ENVIRONMENT];//...........................................................



const REACT_APP_GET_TOKEN = `${REACT_APP_AMBIENTE}/api/recaudo/get/token`;
/**
 *
 * @type {{urlFront: (string), movistar_key: string, urlRecargas: string, url: (string), urlMultimedia: string, checkOutPruebas: boolean}}
 */
const config = {
    url,
    urlFront,
    urlRecargas,
    movistar_key,
    urlMultimedia,
    checkOutPruebas,
    amonServices,
    EPAYCO_REST_RECAUDO_API_INVOICE,
    TELEBUCARAMANGA_KEY,
    METROTEL_KEY,
    MOVISTAR_RECAUDO_KEY,
    showSubscriptions,
    REACT_APP_GEO_IP_URL,
    REACT_APP_CHECKOUT_SUSCRIPTION,
    REACT_APP_CHECKOUT_TEST,

    // CREDENCIALES PRUEBAS SUSCRIPCIONES
    REACT_APP_MOVISTAR_RECAUDO_PUBLIC_KEY,
    REACT_APP_MOVISTAR_DOMINIO_FACTURAS,
    REACT_APP_MOVISTAR_DOMINIO_FACTURAS_SCL,
    REACT_APP_MOVISTAR_DOMINIO,
    REACT_APP_GET_TOKEN,
    REACT_APP_AMBIENTE,
    EPAYCO_APP_CHECKOUT,

    // DESABILITAR TABS
    MOVISTAR_TAB: {
        before: "2020-08-16 05:00:00:00 pm",
        after: "2020-08-18 04:00:00:00 am"
    },
    TELEBUCARAMANGA: {
        before: "2020-08-14 03:00:00:00 pm",
        after: "2020-08-14 04:40:00:00 pm"
    },
    METROTEL: {
        before: "2020-08-14 03:00:00:00 pm",
        after: "2020-08-14 04:40:00:00 pm"
    },
};
export default config
