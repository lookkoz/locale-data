(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['kn_IN'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%z%c%T%s%b%e%r",
            "country_name": null,
            "country_post": null,
            "country_ab2": "IN",
            "country_ab3": "IND",
            "country_num": 356,
            "country_car": "IND",
            "country_isbn": null,
            "lang_name": "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
            "lang_ab": "kn",
            "lang_term": "kan",
            "lang_lib": "kan"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY].*",
            "noexpr": "^[nN].*",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "\u20b9",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 3,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 1,
            "n_cs_precedes": 1,
            "n_sep_by_space": 1,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "INR ",
            "int_frac_digits": 2,
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
            "name_mr": "Mr.",
            "name_mrs": "Mrs.",
            "name_miss": "Miss.",
            "name_ms": "Ms."
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
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
            "int_prefix": "91"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u0cb0",
                "\u0cb8\u0ccb",
                "\u0cae\u0c82",
                "\u0cac\u0cc1",
                "\u0c97\u0cc1",
                "\u0cb6\u0cc1",
                "\u0cb6"
            ],
            "day": [
                "\u0cb0\u0cb5\u0cbf\u0cb5\u0cbe\u0cb0",
                "\u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0",
                "\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0",
                "\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0",
                "\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0",
                "\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0",
                "\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0"
            ],
            "week": null,
            "abmon": [
                "\u0c9c",
                "\u0cab\u0cc6",
                "\u0cae\u0cbe",
                "\u0c8f",
                "\u0cae\u0cc7",
                "\u0c9c\u0cc2",
                "\u0c9c\u0cc1",
                "\u0c86",
                "\u0cb8\u0cc6",
                "\u0c85",
                "\u0ca8",
                "\u0ca6"
            ],
            "mon": [
                "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf",
                "\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf",
                "\u0cae\u0cbe\u0cb0\u0ccd\u0c9a",
                "\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd",
                "\u0cae\u0cc7",
                "\u0c9c\u0cc2\u0ca8\u0ccd",
                "\u0c9c\u0cc1\u0cb2\u0cbe\u0caf\u0cbf",
                "\u0c86\u0c97\u0cb8\u0ccd\u0ca4\u0cc1",
                "\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0",
                "\u0c85\u0c95\u0ccd\u0ca4\u0cc2\u0cac\u0cb0",
                "\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0",
                "\u0ca6\u0cb6\u0c82\u0cac\u0cb0"
            ],
            "d_t_fmt": "%A %d %b %Y %I:%M:%S %p %Z",
            "d_fmt": "%A %d %b %Y",
            "t_fmt": "%I:%M:%S  %Z",
            "am_pm": [
                "\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8",
                "\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8"
            ],
            "t_fmt_ampm": "%I:%M:%S %p %Z",
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
