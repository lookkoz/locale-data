(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        (window.LocaleData || (window.LocaleData = {}))['lzh_TW'] = factory();
    }
}(typeof window !== "undefined" ? window : this, function() {
    return {
        "LC_ADDRESS": {
            "postal_fmt": "%c%N%T%N%s %h %e %r%N%b%N%d%N%f%N%a%N",
            "country_name": "\u4e2d\u83ef\u6c11\u570b",
            "country_post": "TW",
            "country_ab2": "TW",
            "country_ab3": "TWN",
            "country_num": 158,
            "country_car": "RC",
            "country_isbn": 957,
            "lang_name": "\u6f22\u8a9e\u6587\u8a00",
            "lang_ab": null,
            "lang_term": "lzh",
            "lang_lib": "lzh"
        },
        "LC_MEASUREMENT": {
            "measurement": 1
        },
        "LC_MESSAGES": {
            "yesexpr": "^[+1yY\uff59\uff39\u662f]",
            "noexpr": "^[-0nN\uff4e\uff2e\u975e]",
            "yesstr": null,
            "nostr": null
        },
        "LC_MONETARY": {
            "currency_symbol": "NT$",
            "mon_decimal_point": ".",
            "mon_thousands_sep": ",",
            "mon_grouping": 4,
            "positive_sign": "",
            "negative_sign": "-",
            "frac_digits": 2,
            "p_cs_precedes": 1,
            "p_sep_by_space": 0,
            "n_cs_precedes": 1,
            "n_sep_by_space": 0,
            "p_sign_posn": 1,
            "n_sign_posn": 1,
            "int_curr_symbol": "TWD ",
            "int_frac_digits": 2,
            "int_p_cs_precedes": 1,
            "int_p_sep_by_space": 0,
            "int_n_cs_precedes": 1,
            "int_n_sep_by_space": 0,
            "int_p_sign_posn": 1,
            "int_n_sign_posn": 1
        },
        "LC_NAME": {
            "name_fmt": "%f%d%t%g",
            "name_gen": "\u541b",
            "name_mr": "\u5b50",
            "name_mrs": "\u6c0f",
            "name_miss": "\u5973",
            "name_ms": "\u5a18"
        },
        "LC_NUMERIC": {
            "decimal_point": ".",
            "thousands_sep": ",",
            "grouping": 4
        },
        "LC_PAPER": {
            "height": 297,
            "width": 210
        },
        "LC_TELEPHONE": {
            "tel_int_fmt": "+%c-%a-%l",
            "tel_dom_fmt": "%A-%l",
            "int_select": "00",
            "int_prefix": "886"
        },
        "LC_TIME": {
            "date_fmt": "\u516c\u66c6 %C%Oy\u5e74 %B %Oe\u65e5 %A %OH\u6642%OM\u5206%OS\u79d2",
            "abday": [
                "\u65e5",
                "\u4e00",
                "\u4e8c",
                "\u4e09",
                "\u56db",
                "\u4e94",
                "\u516d"
            ],
            "day": [
                "\u9031\u65e5",
                "\u9031\u4e00",
                "\u9031\u4e8c",
                "\u9031\u4e09",
                "\u9031\u56db",
                "\u9031\u4e94",
                "\u9031\u516d"
            ],
            "week": [
                7,
                19971130,
                1
            ],
            "abmon": [
                " \u4e00 ",
                " \u4e8c ",
                " \u4e09 ",
                " \u56db ",
                " \u4e94 ",
                " \u516d ",
                " \u4e03 ",
                " \u516b ",
                " \u4e5d ",
                " \u5341 ",
                "\u5341\u4e00",
                "\u5341\u4e8c"
            ],
            "mon": [
                "\u4e00\u6708",
                "\u4e8c\u6708",
                "\u4e09\u6708",
                "\u56db\u6708",
                "\u4e94\u6708",
                "\u516d\u6708",
                "\u4e03\u6708",
                "\u516b\u6708",
                "\u4e5d\u6708",
                "\u5341\u6708",
                "\u5341\u4e00\u6708",
                "\u5341\u4e8c\u6708"
            ],
            "d_t_fmt": "%OC%Oy\u5e74%B%Od\u65e5 (%A) %OH\u6642%OM\u5206%OS\u79d2",
            "d_fmt": "%OC%Oy\u5e74%B%Od\u65e5",
            "t_fmt": "%OH\u6642%OM\u5206%OS\u79d2",
            "am_pm": [
                "\u671d",
                "\u66ae"
            ],
            "t_fmt_ampm": "%p %OI\u6642%OM\u5206%OS\u79d2",
            "era": [
                "+:2:1913\/\/01\/\/01:+*:\u6c11\u570b:%EC%Ey\u5e74",
                "+:1:1912\/\/01\/\/01:1912\/\/12\/\/31:\u6c11\u570b:%EC\u5143\u5e74",
                "+:1:1911\/\/12\/\/31:-*:\u6c11\u524d:%EC%Ey\u5e74"
            ],
            "era_year": null,
            "era_d_t_fmt": null,
            "era_d_fmt": null,
            "era_t_fmt": null,
            "alt_digits": [
                "\u3007",
                "\u4e00",
                "\u4e8c",
                "\u4e09",
                "\u56db",
                "\u4e94",
                "\u516d",
                "\u4e03",
                "\u516b",
                "\u4e5d",
                "\u5341",
                "\u5341\u4e00",
                "\u5341\u4e8c",
                "\u5341\u4e09",
                "\u5341\u56db",
                "\u5341\u4e94",
                "\u5341\u516d",
                "\u5341\u4e03",
                "\u5341\u516b",
                "\u5341\u4e5d",
                "\u5eff",
                "\u5eff\u4e00",
                "\u5eff\u4e8c",
                "\u5eff\u4e09",
                "\u5eff\u56db",
                "\u5eff\u4e94",
                "\u5eff\u516d",
                "\u5eff\u4e03",
                "\u5eff\u516b",
                "\u5eff\u4e5d",
                "\u5345",
                "\u5345\u4e00"
            ],
            "first_weekday": null,
            "first_workday": null,
            "cal_direction": null,
            "timezone": null
        }
    };
}));
