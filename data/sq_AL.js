(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['sq_AL'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": null,
            "country_post": null,
            "country_ab2": "AL",
            "country_ab3": "ALB",
            "country_num": 8,
            "country_car": "AL",
            "country_isbn": null,
            "lang_name": "shqip",
            "lang_ab": "sq",
            "lang_term": "sqi",
            "lang_lib": "alb"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yYpP].*",
            "noexpr": "^[nNjJ].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "Lek",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 3,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "ALL ",
            "int_frac_digits": 3,
            "int_p_cs_precedes": null,
            "int_p_sep_by_space": null,
            "int_n_cs_precedes": null,
            "int_n_sep_by_space": null,
            "int_p_sign_posn": null,
            "int_n_sign_posn": null
        },
        "LC_NAME": {
            "name_fmt": "%p%t%f%t%g",
            "name_gen": "",
            "name_mr": "Z.",
            "name_mrs": "Znj.",
            "name_miss": "Zsh.",
            "name_ms": "Znj."
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": ".",
            "grouping": 3
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c ;%a ;%l",
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "355"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "Die ",
                "H\u00ebn ",
                "Mar ",
                "M\u00ebr ",
                "Enj ",
                "Pre ",
                "Sht "
            ],
            "day": [
                "e diel ",
                "e h\u00ebn\u00eb ",
                "e mart\u00eb ",
                "e m\u00ebrkur\u00eb ",
                "e enjte ",
                "e premte ",
                "e shtun\u00eb "
            ],
            "week": null,
            "abmon": [
                "Jan",
                "Shk",
                "Mar",
                "Pri",
                "Maj",
                "Qer",
                "Kor",
                "Gsh",
                "Sht",
                "Tet",
                "N\u00ebn",
                "Dhj"
            ],
            "mon": [
                "janar",
                "shkurt",
                "mars",
                "prill",
                "maj",
                "qershor",
                "korrik",
                "gusht",
                "shtator",
                "tetor",
                "n\u00ebntor",
                "dhjetor"
            ],
            "d_t_fmt": "%Y-%b-%d %I.%M.%S.%p %Z",
            "d_fmt": "%Y-%b-%d",
            "t_fmt": "%I.%M.%S. %Z",
            "am_pm": [
                "PD",
                "MD"
            ],
            "t_fmt_ampm": "%I.%M.%S.%p %Z",
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
