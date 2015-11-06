(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['so_DJ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": "Jabuuti",
            "country_post": "DJI",
            "country_ab2": "DJ",
            "country_ab3": "DJI",
            "country_num": 262,
            "country_car": null,
            "country_isbn": null,
            "lang_name": "Soomaali",
            "lang_ab": "so",
            "lang_term": "som",
            "lang_lib": "som"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[oOyY].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": " ",
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
            "int_curr_symbol": "DJF ",
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
            "name_gen": "",
            "name_mr": "Md",
            "name_mrs": "Mw",
            "name_miss": "",
            "name_ms": "Mw"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
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
            "tel_dom_fmt": "%a-%l",
            "int_select": "00",
            "int_prefix": "253"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %r %Z %Y",
            "abday": [
                "axa",
                "isn",
                "sal",
                "arb",
                "kha",
                "jim",
                "sab"
            ],
            "day": [
                "Axad",
                "Isniin",
                "Salaaso",
                "Arbaco",
                "Khamiis",
                "Jimco",
                "Sabti"
            ],
            "week": null,
            "abmon": [
                "kob",
                "lab",
                "sad",
                "afr",
                "sha",
                "lix",
                "tod",
                "sid",
                "sag",
                "tob",
                "kit",
                "lit"
            ],
            "mon": [
                "Bisha Koobaad",
                "Bisha Labaad",
                "Bisha Saddexaad",
                "Bisha Afraad",
                "Bisha Shanaad",
                "Bisha Lixaad",
                "Bisha Todobaad",
                "Bisha Sideedaad",
                "Bisha Sagaalaad",
                "Bisha Tobnaad",
                "Bisha Kow iyo Tobnaad",
                "Bisha Laba iyo Tobnaad"
            ],
            "d_t_fmt": "%a %d %b %Y %r %Z",
            "d_fmt": "%d.%m.%Y",
            "t_fmt": "%l:%M:%S",
            "am_pm": [
                "subaxnimo",
                "galabnimo"
            ],
            "t_fmt_ampm": "%X %p",
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
