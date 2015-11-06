(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['it_IT@euro'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": "IT",
            "country_ab3": "ITA",
            "country_num": 380,
            "country_car": "I",
            "country_isbn": null,
            "lang_name": "Italiano",
            "lang_ab": "it",
            "lang_term": "ita",
            "lang_lib": "ita"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[sSyY].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20ac",
            "mon_decimal_point": ",",
            "mon_thousands_sep": ".",
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
            "thousands_sep": "",
            "grouping": [
                0,
                0
            ]
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": null,
            "int_select": null,
            "int_prefix": "39"
        },
        "LC_TIME": {
            "date_fmt": "%a %e %b %Y, %H.%M.%S, %Z",
            "abday": [
                "dom",
                "lun",
                "mar",
                "mer",
                "gio",
                "ven",
                "sab"
            ],
            "day": [
                "domenica",
                "luned\u00ec",
                "marted\u00ec",
                "mercoled\u00ec",
                "gioved\u00ec",
                "venerd\u00ec",
                "sabato"
            ],
            "week": null,
            "abmon": [
                "gen",
                "feb",
                "mar",
                "apr",
                "mag",
                "giu",
                "lug",
                "ago",
                "set",
                "ott",
                "nov",
                "dic"
            ],
            "mon": [
                "gennaio",
                "febbraio",
                "marzo",
                "aprile",
                "maggio",
                "giugno",
                "luglio",
                "agosto",
                "settembre",
                "ottobre",
                "novembre",
                "dicembre"
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
            "first_weekday": 2,
            "first_workday": 2,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
