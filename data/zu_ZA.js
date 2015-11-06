(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['zu_ZA'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": "Mzansi Afrika",
            "country_post": "ZA",
            "country_ab2": "ZA",
            "country_ab3": "ZAF",
            "country_num": 710,
            "country_car": "ZA",
            "country_isbn": null,
            "lang_name": "IsiZulu",
            "lang_ab": "zu",
            "lang_term": "zul",
            "lang_lib": "zul"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY]",
            "noexpr": "^[nNcC]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "R",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "ZAR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": "Mnumzane",
            "name_mrs": "Nkosikazi",
            "name_miss": "Nkosazane",
            "name_ms": ""
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": [
                3,
                3
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "(%A) %l",
            "int_select": "00",
            "int_prefix": "27"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Son",
                "Mso",
                "Bil",
                "Tha",
                "Sin",
                "Hla",
                "Mgq"
            ],
            "day": [
                "iSonto",
                "uMsombuluko",
                "uLwesibili",
                "uLwesithathu",
                "uLwesine",
                "uLwesihlanu",
                "uMgqibelo"
            ],
            "week": null,
            "abmon": [
                "Mas",
                "Ola",
                "Nda",
                "Mba",
                "Aba",
                "Ang",
                "Ntu",
                "Ncw",
                "Man",
                "Mfu",
                "Lwe",
                "Zib"
            ],
            "mon": [
                "uMasingana",
                "uNhlolanja",
                "uNdasa",
                "uMbasa",
                "uNhlaba",
                "uNhlangulana",
                "uNtulikazi",
                "uNcwaba",
                "uMandulo",
                "uMfumfu",
                "uLwezi",
                "uZibandlela"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d\/%m\/%Y",
            "t_fmt": "%T",
            "am_pm": [
                "",
                ""
            ],
            "t_fmt_ampm": "",
            "era": null,
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": null,
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
