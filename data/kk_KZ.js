(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['kk_KZ'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%b%N%s %h %e %r%N%z %T%N%c%N",
            "country_name": null,
            "country_post": null,
            "country_ab2": null,
            "country_ab3": null,
            "country_num": null,
            "country_car": "KZ",
            "country_isbn": null,
            "lang_name": null,
            "lang_ab": "kk",
            "lang_term": "kaz",
            "lang_lib": "kaz"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[\u0418\u0438Yy].*",
            "noexpr": "^[\u0416\u0436Nn].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u0442\u0433",
            "mon_decimal_point": ".",
            "mon_thousands_sep": " ",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 1,
            "n_cs_precedes": 0,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "KZT ",
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
            "thousands_sep": ".",
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
            "int_select": null,
            "int_prefix": "7"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0416\u043a",
                "\u0414\u0441",
                "\u0421\u0441",
                "\u0421\u0440",
                "\u0411\u0441",
                "\u0416\u043c",
                "\u0421\u043d"
            ],
            "day": [
                "\u0416\u0435\u043a\u0441\u0435\u043d\u0431\u0456",
                "\u0414\u04af\u0439\u0441\u0435\u043d\u0431\u0456",
                "\u0421\u0435\u0439\u0441\u0435\u043d\u0431\u0456",
                "\u0421\u04d9\u0440\u0441\u0435\u043d\u0431\u0456",
                "\u0411\u0435\u0439\u0441\u0435\u043d\u0431\u0456",
                "\u0416\u04b1\u043c\u0430",
                "\u0421\u0435\u043d\u0431\u0456"
            ],
            "week": null,
            "abmon": [
                "\u049a\u0430\u04a3",
                "\u0410\u049b\u043f",
                "\u041d\u0430\u0443",
                "\u0421\u04d9\u0443",
                "\u041c\u0430\u043c",
                "\u041c\u0430\u0443",
                "\u0428\u0456\u043b",
                "\u0422\u0430\u043c",
                "\u049a\u044b\u0440",
                "\u049a\u0430\u0437",
                "\u049a\u0430\u0440",
                "\u0416\u0435\u043b"
            ],
            "mon": [
                "\u049a\u0430\u04a3\u0442\u0430\u0440",
                "\u0410\u049b\u043f\u0430\u043d",
                "\u041d\u0430\u0443\u0440\u044b\u0437",
                "\u0421\u04d9\u0443\u0456\u0440",
                "\u041c\u0430\u043c\u044b\u0440",
                "\u041c\u0430\u0443\u0441\u044b\u043c",
                "\u0428\u0456\u043b\u0434\u0435",
                "\u0422\u0430\u043c\u044b\u0437",
                "\u049a\u044b\u0440\u043a\u04af\u0439\u0435\u043a",
                "\u049a\u0430\u0437\u0430\u043d",
                "\u049a\u0430\u0440\u0430\u0448\u0430",
                "\u0416\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"
            ],
            "d_t_fmt": "%a %d %b %Y %T",
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
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
