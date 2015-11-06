(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['et_EE'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%a%N%f%N%d%N%b%N%s%t%h%t%e%t%r%N%C-%z %T%N%c%N",
            "country_name": "Eesti",
            "country_post": "EE",
            "country_ab2": "EE",
            "country_ab3": "EST",
            "country_num": 233,
            "country_car": "EST",
            "country_isbn": "9985",
            "lang_name": "eesti keel",
            "lang_ab": "et",
            "lang_term": "est",
            "lang_lib": "est"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[JjYy].*",
            "noexpr": "^[EeNn].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": "\u00a0",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "EUR ",
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
            "name_mr": null,
            "name_mrs": null,
            "name_miss": null,
            "name_ms": null
        },
        "LC_NUMERIC": {
            "decimal_point": ",",
            "thousands_sep": "\u00a0",
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
            "tel_dom_fmt": null,
            "int_select": "00",
            "int_prefix": "372"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "P",
                "E",
                "T",
                "K",
                "N",
                "R",
                "L"
            ],
            "day": [
                "p\u00fchap\u00e4ev",
                "esmasp\u00e4ev",
                "teisip\u00e4ev",
                "kolmap\u00e4ev",
                "neljap\u00e4ev",
                "reede",
                "laup\u00e4ev"
            ],
            "week": [
                7,
                19971130,
                4
            ],
            "abmon": [
                "jaan ",
                "veebr",
                "m\u00e4rts",
                "apr  ",
                "mai  ",
                "juuni",
                "juuli",
                "aug  ",
                "sept ",
                "okt  ",
                "nov  ",
                "dets "
            ],
            "mon": [
                "jaanuar",
                "veebruar",
                "m\u00e4rts",
                "aprill",
                "mai",
                "juuni",
                "juuli",
                "august",
                "september",
                "oktoober",
                "november",
                "detsember"
            ],
            "d_t_fmt": "%a %d %b %Y %T %Z",
            "d_fmt": "%d.%m.%Y",
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
            "first_weekday": 2,
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
