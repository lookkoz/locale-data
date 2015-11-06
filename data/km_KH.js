(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['km_KH'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%f%N%a%N%d%N%r%t%e%t%b%N%h%t%s%N%T%N%S%N%z%c%N",
            "country_name": "\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6",
            "country_post": null,
            "country_ab2": "LA",
            "country_ab3": "LAO",
            "country_num": 418,
            "country_car": "LAO",
            "country_isbn": null,
            "lang_name": "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
            "lang_ab": "km",
            "lang_term": "khm",
            "lang_lib": "khm"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[yY]([eE][sS])?",
            "noexpr": "^[nN][oO]?",
            "yesstr": "yes:YES:y:Y",
            "nostr": "no:NO:n:N"
        },
        "LC_MONETARY": {
            "currency_symbol": "\u17db",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": [
                3,
                3
            ],
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 0,
            "p_sep_by_space": 0,
            "n_cs_precedes": 0,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "KHR ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 0,
            "int_p_sep_by_space": 0,
            "int_n_cs_precedes": 0,
            "int_n_sep_by_space": 0,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%d%t%g%t%m%t%f",
            "name_gen": null,
            "name_mr": "\u0e97.",
            "name_mrs": "\u0e99.",
            "name_miss": null,
            "name_ms": null
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
            "tel_int_fmt": "+%c %a %l",
            "tel_dom_fmt": "(%A)%l",
            "int_select": "001",
            "int_prefix": "856"
        },
        "LC_TIME": {
            "date_fmt": "%a %b %e %H:%M:%S %Z %Y",
            "abday": [
                "\u17a2\u17b6",
                "\u1785",
                "\u17a2",
                "\u1796\u17bb",
                "\u1796\u17d2\u179a",
                "\u179f\u17bb",
                "\u179f"
            ],
            "day": [
                "\u1790\u17d2\u1784\u17c3\u200b\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799",
                "\u1790\u17d2\u1784\u17c3\u200b\u1785\u17d0\u1793\u17d2\u1791",
                "\u1790\u17d2\u1784\u17c3\u200b\u17a2\u1784\u17d2\u1782\u17b6\u179a",
                "\u1790\u17d2\u1784\u17c3\u200b\u1796\u17bb\u1792",
                "\u1790\u17d2\u1784\u17c3\u200b\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd",
                "\u1790\u17d2\u1784\u17c3\u200b\u179f\u17bb\u1780\u17d2\u179a",
                "\u1790\u17d2\u1784\u17c3\u200b\u179f\u17c5\u179a\u17cd"
            ],
            "week": null,
            "abmon": [
                "\u17e1",
                "\u17e2",
                "\u17e3",
                "\u17e4",
                "\u17e5",
                "\u17e6",
                "\u17e7",
                "\u17e8",
                "\u17e9",
                "\u17e1\u17e0",
                "\u17e1\u17e1",
                "\u17e1\u17e2"
            ],
            "mon": [
                "\u1798\u1780\u179a\u17b6",
                "\u1780\u17bb\u1798\u17d2\u1797\u17c8",
                "\u1798\u17b7\u1793\u17b6",
                "\u1798\u17c1\u179f\u17b6",
                "\u17a7\u179f\u1797\u17b6",
                "\u1798\u17b7\u1790\u17bb\u1793\u17b6",
                "\u1780\u1780\u17d2\u1780\u178a\u17b6",
                "\u179f\u17b8\u17a0\u17b6",
                "\u1780\u1789\u17d2\u1789\u17b6",
                "\u178f\u17bb\u179b\u17b6",
                "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",
                "\u1792\u17d2\u1793\u17bc"
            ],
            "d_t_fmt": "%A \u1790\u17d2\u1784\u17c3 %e \u1781\u17c2 %B \u1786\u17d2\u1793\u17b6\u17c6  %Y, %H \u1798\u17c9\u17c4\u1784 m \u1793\u17b6\u1791\u17b8 %S \u179c\u17b7\u1793\u17b6\u1791\u17b8\u200b",
            "d_fmt": "%e %B %Y",
            "t_fmt": "%H:%M:%S",
            "am_pm": [
                "\u1796\u17d2\u179a\u17b9\u1780",
                "\u179b\u17d2\u1784\u17b6\u1785"
            ],
            "t_fmt_ampm": "%I:%M:%S %p",
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
