import config from "./../config/config";


let   getVariableParam = (parametro:string )=> {
    var results = new RegExp('[\?&]' + parametro + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return decodeURI(results[1]) || 0;
    }
}


export let validateRoute = (changeLocation:(e:string)=> void )=> {
    console.log("aqui")
    let url = window.location.pathname.split('/');
    let parametros = window.location.search.replace('?', ''); //Parametros en url
    let param = url[url.length - 1];
    let location = parametros ?  '/' : [url[0] + '//' + url[2] + '/'];
    let extra = `${ param.includes('?') ? '&' + param.split('?')[1] : ''}`;
    const search = window.location.search;
    let pathname = window.location.pathname;
    if (getVariableParam('ref_payco')) {

        switch (pathname) {
            case '/pago_movil':
                config.MOVISTAR_TAB ? window.location.assign(`${location}`) :
                changeLocation(`/?tipo_servicio=movil&tipo_pago=movistar${extra}`);
                break;
            case '/pago_fijo':
                config.MOVISTAR_TAB ? window.location.assign(`${location}`) :
                changeLocation(`/?tipo_servicio=fijo&tipo_pago=movistar${extra}`);
                break;

            case '/pago_metrotel':
                config.METROTEL ? window.location.assign(`${location}`) :
                changeLocation(`/?tipo_servicio=fijo&tipo_pago=metrotel${extra}`);
                break;

            case '/pago_corporativo':
                changeLocation(`/corporativo?tipo_servicio=corporativo&tipo_pago=movistar${extra}`);
                sessionStorage.setItem('isCorporativo', '1');
                break;

            case '/pago_telebucaramanga':
                config.TELEBUCARAMANGA ? changeLocation(`${location}`) :
                    changeLocation(`/?tipo_servicio=fijo&tipo_pago=telebucaramanga${extra}`);
                break;

            case '/corporativo/pago_movil':
                changeLocation(`/corporativo?tipo_servicio=movil&tipo_pago=movistar${extra}`);
                sessionStorage.setItem('isCorporativo', '1');
                break;
            case '/corporativo/pago_fijo':
                changeLocation(`/corporativo?tipo_servicio=fijo&tipo_pago=movistar${extra}`);
                sessionStorage.setItem('isCorporativo', '1');
                break;
            case '/corporativo/pago_corporativo':
                changeLocation(`/corporativo?tipo_servicio=corporativo&tipo_pago=movistar${extra}`);
                sessionStorage.setItem('isCorporativo', '1');
                break;
            case '/corporativo/pago_metrotel':
                changeLocation(`/corporativo?tipo_servicio=fijo&tipo_pago=metrotel${extra}`);
                sessionStorage.setItem('isCorporativo', '1');
                break;
            case '/corporativo/pago_telebucaramanga':
                changeLocation(`/corporativo?tipo_servicio=fijo&tipo_pago=telebucaramanga${extra}`);
                sessionStorage.setItem('isCorporativo', '1');
                break;
            default:
                if (getVariableParam('tipo_pago') && search) {
                    if (pathname === '/'){
                        changeLocation(`/${search}&tipo_pago=movistar&tipo_servicio=movil`)
                        sessionStorage.clear();
                    }
                    else if (
                        pathname === '/' ||
                        pathname === '/corporativo' ||
                        pathname === '/corporativo/' ||
                        pathname === 'corporativo/') {
                        changeLocation(`/corporativo${search}&tipo_pago=movistar`);
                        console.log("puto")
                        sessionStorage.setItem('isCorporativo', '1');
                    }
                }
                break;
        }
    }
}