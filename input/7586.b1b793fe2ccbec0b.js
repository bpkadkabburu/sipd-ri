"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [7586],
    {
        64398: (wa, B, d) => {
            d.r(B), d.d(B, { DashboardModule: () => Ma });
            var p = d(69808),
                T = d(4521),
                $ = d(88801),
                t = d(5e3),
                f = d(90508);
            let z = (() => {
                class a {}
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵmod = t.oAB({ type: a })),
                    (a.ɵinj = t.cJS({ imports: [[f.BQ], f.BQ] })),
                    a
                );
            })();
            d(39646), d(62843), d(4128), d(18505), d(54004), d(70262), d(28746), d(13099);
            var _ = d(40520);
            d(22313);
            let st = (() => {
                class a {}
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵmod = t.oAB({ type: a })),
                    (a.ɵinj = t.cJS({ imports: [[f.BQ], f.BQ] })),
                    a
                );
            })();
            var lt = d(67322),
                dt = d(77531),
                ct = d(74107);
            let ut = (() => {
                class a {}
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵmod = t.oAB({ type: a })),
                    (a.ɵinj = t.cJS({ imports: [[f.BQ], f.BQ] })),
                    a
                );
            })();
            var ht = d(47423);
            let _t = (() => {
                class a {}
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵmod = t.oAB({ type: a })),
                    (a.ɵinj = t.cJS({ imports: [[f.uc, f.BQ], f.uc, f.BQ] })),
                    a
                );
            })();
            var c = d(32075),
                x = d(84847),
                D = d(79062),
                gt = d(15664),
                ft = d(17144),
                bt = d(47429);
            d(41777), d(70925);
            let Mt = (() => {
                class a {}
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵmod = t.oAB({ type: a })),
                    (a.ɵinj = t.cJS({ imports: [[p.ez, f.BQ, bt.eL, f.si, ft.Q8, gt.rt], f.BQ] })),
                    a
                );
            })();
            var m = d(93075),
                S = d(44619),
                H = d(39483),
                Z = d(42115),
                Q = d(64942);
            let Dt = (() => {
                class a {
                    constructor(e, i, r) {
                        (this.route = e), (this.router = i), (this.konfigurasiService = r), null == this.konfigurasiService.getTahun() ? this.router.navigate(["/tahun/list"]) : this.router.navigate(["/dashboard/pusat"]);
                    }
                    ngOnInit() {}
                }
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)(t.Y36(T.gz), t.Y36(T.F0), t.Y36(Q.W));
                    }),
                    (a.ɵcmp = t.Xpm({
                        type: a,
                        selectors: [["app-dashboard"]],
                        decls: 1,
                        vars: 0,
                        template: function (e, i) {
                            1 & e && t._UZ(0, "router-outlet");
                        },
                        directives: [T.lC],
                        styles: [""],
                    })),
                    a
                );
            })();
            var N = d(22038),
                It = d(88822),
                q = d(92340);
            let E = (() => {
                class a {
                    constructor(e) {
                        (this.http = e), (this.ROOT_URI = q.N.apiUrlDashboard), (this.JADWAL_URI = q.N.apiUrlJadwal);
                    }
                    getData(e) {
                        let i = new _.LE().set("tahun", e).set("masuk", "saya");
                        return this.http.post(this.ROOT_URI + "/dashboard/rekap", i);
                    }
                    getDetailData(e, i, r) {
                        let o = new _.LE().set("tahun", e).set("jenis", i).set("status", r);
                        return this.http.post(this.ROOT_URI + "/dashboard/detailrekap", o);
                    }
                    getRekapUrusan(e, i) {
                        let r = new _.LE().set("tahun", e).set("urusan", i);
                        return this.http.post(this.ROOT_URI + "/dashboard/rekapurusan", r);
                    }
                    getDetailBidang(e, i) {
                        let r = new _.LE().set("tahun", e).set("urusan", i);
                        return this.http.post(this.ROOT_URI + "/dashboard/detailbidang", r);
                    }
                    getDetailUrusan(e, i) {
                        let r = new _.LE().set("tahun", e).set("urusan", i);
                        return this.http.post(this.ROOT_URI + "/dashboard/detailurusan", r);
                    }
                    getProvinsi() {
                        return this.http.get(this.ROOT_URI + "/master/provinsi");
                    }
                    getKabkot(e) {
                        return this.http.get(this.ROOT_URI + "/master/kabkot/" + e);
                    }
                    getRekapUrusanDaerah(e) {
                        console.log(e.controls.tahundaerah.value);
                        let i = { tahun: String(e.controls.tahundaerah.value), provinsi: String(e.controls.provinsiselect.value), kabkot: String(e.controls.kabkotselect.value) },
                            r = new _.LE({ fromObject: i });
                        return this.http.post(this.ROOT_URI + "/dashboard/rekapurusandaerah", r);
                    }
                    getDetailUrusanDaerah(e, i, r) {
                        let s = new _.LE({ fromObject: { tahun: i, id_daerah: e, urusan: r } });
                        return this.http.post(this.ROOT_URI + "/dashboard/detailurusandaerah", s);
                    }
                    getRekapRKPD(e, i) {
                        let r = new _.LE().set("tahun", e).append("jenis", i);
                        return this.http.post(this.ROOT_URI + "/dashboard/rekaprkpd", r);
                    }
                    getDetailRKPD(e) {
                        let i = new _.LE().set("tahun", e);
                        return this.http.post(this.ROOT_URI + "/dashboard/detailprkpd", i);
                    }
                    getRekapAll(e) {
                        let i = new _.LE().set("tahun", e);
                        return this.http.post(this.JADWAL_URI + "/dashboard_jadwal/rekap", i);
                    }
                    getDetailRekapAll(e, i) {
                        let r = new _.LE().set("tahun", i);
                        return this.http.post(this.JADWAL_URI + "/dashboard_jadwal/" + e, r);
                    }
                }
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)(t.LFG(_.eN));
                    }),
                    (a.ɵprov = t.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
            function wt(a, n) {
                1 & a &&
                    (t.TgZ(0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4),
                    t._uU(5, "Pengumuman"),
                    t.qZA()()(),
                    t.TgZ(6, "div", 5),
                    t._UZ(7, "div", 6),
                    t.TgZ(8, "div", 7)(9, "p", 8),
                    t._uU(10, "1. Pastikan semua data sudah dimutakhirkan sebelum membuka jadwal tahapan penganggaran"),
                    t.qZA()(),
                    t._UZ(11, "div", 6),
                    t.TgZ(12, "div", 7)(13, "p", 8),
                    t._uU(14, "2. Untuk mengetahui cara pemutakhiran silahkan download file "),
                    t.TgZ(15, "span", 9)(16, "a", 10),
                    t._uU(17, "Download"),
                    t.qZA()()()(),
                    t._UZ(18, "div", 6),
                    t.TgZ(19, "div", 7)(20, "p", 8),
                    t._uU(21, "3. Panduan Pemindahan Rincian Belanja Antar Sub Kegiatan "),
                    t.TgZ(22, "span", 9)(23, "a", 11),
                    t._uU(24, "Download"),
                    t.qZA()()()(),
                    t._UZ(25, "div", 6),
                    t.TgZ(26, "div", 7)(27, "p", 8),
                    t._uU(28, "4. Untuk mengetahui cara penggunaan berita acara kesepatakan silahkan download file "),
                    t.TgZ(29, "span", 9)(30, "a", 12),
                    t._uU(31, "Download"),
                    t.qZA()()()(),
                    t._UZ(32, "div", 6),
                    t.TgZ(33, "div", 7)(34, "p", 8),
                    t._uU(35, "5. Download Keputusan Menteri Dalam Negeri Nomor 900.1.15.5-1317 Tahun 2023 tentang Perubahan atas Kepmendagri Nomor 050-5889 tentang Hasil Verifikasi Validasi "),
                    t.TgZ(36, "span", 9)(37, "a", 13),
                    t._uU(38, "Download"),
                    t.qZA()()()(),
                    t._UZ(39, "div", 6)(40, "div", 14),
                    t.qZA()()());
            }
            function Rt(a, n) {
                if ((1 & a && (t.TgZ(0, "option", 49), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.s9C("value", e.tahun), t.xp6(1), t.hij(" ", e.tahun, " ");
                }
            }
            function kt(a, n) {
                if (1 & a) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22),
                        t._uU(5, "Tahun"),
                        t.qZA(),
                        t.TgZ(6, "select", 23),
                        t.NdJ("change", function (r) {
                            return t.CHM(e), t.oxw(2).pilihTahun(r);
                        }),
                        t.TgZ(7, "option", 24),
                        t._uU(8, "Pilih Tahun"),
                        t.qZA(),
                        t.YNc(9, Rt, 2, 2, "option", 25),
                        t.qZA()(),
                        t.TgZ(10, "div", 26)(11, "div", 27)(12, "div", 28)(13, "span", 29)(14, "div", 30),
                        t._uU(15),
                        t.ALo(16, "number"),
                        t.qZA()(),
                        t.TgZ(17, "h6", 31),
                        t._uU(18, "RPJMD"),
                        t.qZA()(),
                        t.TgZ(19, "h4", 32)(20, "a", 33),
                        t.NdJ("click", function () {
                            return t.CHM(e), t.oxw(2).showDetailRekap("rpjmd", "2024");
                        }),
                        t._uU(21),
                        t.qZA()()(),
                        t.TgZ(22, "div", 34)(23, "div", 28)(24, "span", 35)(25, "div", 30),
                        t._uU(26),
                        t.ALo(27, "number"),
                        t.qZA()(),
                        t.TgZ(28, "h6", 36),
                        t._uU(29, "RPD"),
                        t.qZA()(),
                        t.TgZ(30, "h4", 37)(31, "a", 38),
                        t.NdJ("click", function () {
                            return t.CHM(e), t.oxw(2).showDetailRekap("rpd", "2024");
                        }),
                        t._uU(32),
                        t.qZA()()(),
                        t.TgZ(33, "div", 39)(34, "div", 28)(35, "span", 40)(36, "div", 30),
                        t._uU(37),
                        t.ALo(38, "number"),
                        t.qZA()(),
                        t.TgZ(39, "h6", 41),
                        t._uU(40, "RENSTRA"),
                        t.qZA()(),
                        t.TgZ(41, "h4", 42)(42, "a", 43),
                        t.NdJ("click", function () {
                            return t.CHM(e), t.oxw(2).showDetailRekap("renstra", "2024");
                        }),
                        t._uU(43),
                        t.qZA()()(),
                        t.TgZ(44, "div", 44)(45, "div", 28)(46, "span", 45)(47, "div", 30),
                        t._uU(48),
                        t.ALo(49, "number"),
                        t.qZA()(),
                        t.TgZ(50, "h6", 46),
                        t._uU(51, "RKPD"),
                        t.qZA()(),
                        t.TgZ(52, "h4", 47)(53, "a", 48),
                        t.NdJ("click", function () {
                            return t.CHM(e), t.oxw(2).showDetailRekap("rkpd", "2024");
                        }),
                        t._uU(54),
                        t.qZA()()()()()()();
                }
                if (2 & a) {
                    const e = t.oxw(2);
                    t.xp6(6),
                        t.Q6J("value", e.tahunDefault),
                        t.xp6(3),
                        t.Q6J("ngForOf", e.tahunAnggaranList),
                        t.xp6(6),
                        t.hij(" ", t.xi3(16, 10, (e.rekapData.data_rpjm / e.rekapData.total_daerah) * 100, "1.2-2"), " % "),
                        t.xp6(6),
                        t.hij("", e.rekapData.data_rpjm, " Daerah"),
                        t.xp6(5),
                        t.hij(" ", t.xi3(27, 13, (e.rekapData.data_rpd / e.rekapData.total_daerah) * 100, "1.2-2"), " % "),
                        t.xp6(6),
                        t.hij("", e.rekapData.data_rpd, " Daerah"),
                        t.xp6(5),
                        t.hij(" ", t.xi3(38, 16, (e.rekapData.data_renstra / e.rekapData.total_daerah) * 100, "1.2-2"), " % "),
                        t.xp6(6),
                        t.hij("", e.rekapData.data_renstra, " Daerah"),
                        t.xp6(5),
                        t.hij(" ", t.xi3(49, 19, (e.rekapData.data_rkpd / e.rekapData.total_daerah) * 100, "1.2-2"), " % "),
                        t.xp6(6),
                        t.hij("", e.rekapData.data_rkpd, " Daerah");
                }
            }
            function At(a, n) {
                1 & a && (t.TgZ(0, "th", 64), t._uU(1, " Kode Daerah "), t.qZA());
            }
            function Pt(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 65), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", e.kode_ddn, " ");
                }
            }
            function St(a, n) {
                1 & a && (t.TgZ(0, "th", 64), t._uU(1, " Nama Daerah "), t.qZA());
            }
            function Zt(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 65), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", e.nama_daerah, " ");
                }
            }
            function Nt(a, n) {
                1 & a && t._UZ(0, "tr", 66);
            }
            function Et(a, n) {
                1 & a && t._UZ(0, "tr", 67);
            }
            const Y = function () {
                return [10];
            };
            function Ut(a, n) {
                if (1 & a) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 1)(1, "div", 50)(2, "div", 3)(3, "h4"),
                        t._uU(4),
                        t.qZA()(),
                        t.TgZ(5, "div", 51),
                        t._UZ(6, "span", 52),
                        t.TgZ(7, "input", 53),
                        t.NdJ("keyup", function (r) {
                            return t.CHM(e), t.oxw(2).applyFilter(r);
                        }),
                        t.qZA()()(),
                        t.TgZ(8, "div", 54)(9, "div", 55)(10, "table", 56),
                        t.ynx(11, 57),
                        t.YNc(12, At, 2, 0, "th", 58),
                        t.YNc(13, Pt, 2, 1, "td", 59),
                        t.BQk(),
                        t.ynx(14, 60),
                        t.YNc(15, St, 2, 0, "th", 58),
                        t.YNc(16, Zt, 2, 1, "td", 59),
                        t.BQk(),
                        t.YNc(17, Nt, 1, 0, "tr", 61),
                        t.YNc(18, Et, 1, 0, "tr", 62),
                        t.qZA(),
                        t._UZ(19, "mat-paginator", 63),
                        t.qZA()()();
                }
                if (2 & a) {
                    const e = t.oxw(2);
                    t.xp6(4),
                        t.Oqu(e.judulDetail),
                        t.xp6(2),
                        t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen021.svg"),
                        t.xp6(4),
                        t.Q6J("dataSource", e.dataSourceRekap),
                        t.xp6(7),
                        t.Q6J("matHeaderRowDef", e.displayedRekapColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", e.displayedRekapColumns),
                        t.xp6(1),
                        t.Q6J("pageSizeOptions", t.DdM(6, Y));
                }
            }
            function Bt(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " Kode Wil "), t.qZA());
            }
            function Lt(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 81), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", e.kode_ddn, " ");
                }
            }
            function Ft(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " Nama Wilayah "), t.qZA());
            }
            function Ot(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 81), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", e.nama_daerah, " ");
                }
            }
            function jt(a, n) {
                1 & a && t._UZ(0, "span", 82), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen034.svg");
            }
            function Gt(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " Persiapan "), t.qZA());
            }
            function Kt(a, n) {
                1 & a && t._UZ(0, "span", 85), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function Ht(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 83), t.YNc(1, Kt, 1, 1, "span", 84), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(20);
                    t.xp6(1), t.Q6J("ngIf", e.cek_1)("ngIfElse", i);
                }
            }
            function Qt(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " RKPD Ranwal "), t.qZA());
            }
            function qt(a, n) {
                1 & a && t._UZ(0, "span", 87), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function Yt(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 83), t.YNc(1, qt, 1, 1, "span", 86), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(20);
                    t.xp6(1), t.Q6J("ngIf", e.cek_2)("ngIfElse", i);
                }
            }
            function Jt(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " RKPD Perancangan "), t.qZA());
            }
            function $t(a, n) {
                1 & a && t._UZ(0, "span", 89), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function zt(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 83), t.YNc(1, $t, 1, 1, "span", 88), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(20);
                    t.xp6(1), t.Q6J("ngIf", e.cek_3)("ngIfElse", i);
                }
            }
            function Vt(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " Musrenbang "), t.qZA());
            }
            function Wt(a, n) {
                1 & a && t._UZ(0, "span", 91), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function Xt(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 83), t.YNc(1, Wt, 1, 1, "span", 90), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(20);
                    t.xp6(1), t.Q6J("ngIf", e.cek_4)("ngIfElse", i);
                }
            }
            function te(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " RKPD Akhir "), t.qZA());
            }
            function ee(a, n) {
                1 & a && t._UZ(0, "span", 93), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function ae(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 83), t.YNc(1, ee, 1, 1, "span", 92), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(20);
                    t.xp6(1), t.Q6J("ngIf", e.cek_5)("ngIfElse", i);
                }
            }
            function ie(a, n) {
                1 & a && (t.TgZ(0, "th", 80), t._uU(1, " RKPD Final "), t.qZA());
            }
            function ne(a, n) {
                1 & a && t._UZ(0, "span", 95), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function re(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 83), t.YNc(1, ne, 1, 1, "span", 94), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(20);
                    t.xp6(1), t.Q6J("ngIf", e.cek_6)("ngIfElse", i);
                }
            }
            function oe(a, n) {
                1 & a && t._UZ(0, "tr", 96);
            }
            function se(a, n) {
                1 & a && t._UZ(0, "tr", 67);
            }
            function le(a, n) {
                if (1 & a) {
                    const e = t.EpF();
                    t.TgZ(0, "div", 19)(1, "div", 20)(2, "div", 1)(3, "div", 50)(4, "div", 3)(5, "h4"),
                        t._uU(6, "Detail"),
                        t.qZA()(),
                        t.TgZ(7, "div", 51),
                        t._UZ(8, "span", 52),
                        t.TgZ(9, "input", 53),
                        t.NdJ("keyup", function (r) {
                            return t.CHM(e), t.oxw(2).applyFilterRKPD(r);
                        }),
                        t.qZA()()(),
                        t.TgZ(10, "div", 54)(11, "div", 55)(12, "table", 56),
                        t.ynx(13, 57),
                        t.YNc(14, Bt, 2, 0, "th", 68),
                        t.YNc(15, Lt, 2, 1, "td", 69),
                        t.BQk(),
                        t.ynx(16, 60),
                        t.YNc(17, Ft, 2, 0, "th", 68),
                        t.YNc(18, Ot, 2, 1, "td", 69),
                        t.BQk(),
                        t.YNc(19, jt, 1, 1, "ng-template", null, 70, t.W1O),
                        t.ynx(21, 71),
                        t.YNc(22, Gt, 2, 0, "th", 68),
                        t.YNc(23, Ht, 2, 2, "td", 72),
                        t.BQk(),
                        t.ynx(24, 73),
                        t.YNc(25, Qt, 2, 0, "th", 68),
                        t.YNc(26, Yt, 2, 2, "td", 72),
                        t.BQk(),
                        t.ynx(27, 74),
                        t.YNc(28, Jt, 2, 0, "th", 68),
                        t.YNc(29, zt, 2, 2, "td", 72),
                        t.BQk(),
                        t.ynx(30, 75),
                        t.YNc(31, Vt, 2, 0, "th", 68),
                        t.YNc(32, Xt, 2, 2, "td", 72),
                        t.BQk(),
                        t.ynx(33, 76),
                        t.YNc(34, te, 2, 0, "th", 68),
                        t.YNc(35, ae, 2, 2, "td", 72),
                        t.BQk(),
                        t.ynx(36, 77),
                        t.YNc(37, ie, 2, 0, "th", 68),
                        t.YNc(38, re, 2, 2, "td", 72),
                        t.BQk(),
                        t.YNc(39, oe, 1, 0, "tr", 78),
                        t.YNc(40, se, 1, 0, "tr", 79),
                        t.qZA(),
                        t._UZ(41, "mat-paginator", 63),
                        t.qZA()()()()();
                }
                if (2 & a) {
                    const e = t.oxw(2);
                    t.xp6(8),
                        t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen021.svg"),
                        t.xp6(4),
                        t.Q6J("dataSource", e.dataSourceRKPD),
                        t.xp6(27),
                        t.Q6J("matHeaderRowDef", e.displayedRKPDColumns),
                        t.xp6(1),
                        t.Q6J("matRowDefColumns", e.displayedRKPDColumns),
                        t.xp6(1),
                        t.Q6J("pageSizeOptions", t.DdM(5, Y));
                }
            }
            function de(a, n) {
                if (
                    (1 & a && (t.TgZ(0, "div")(1, "div", 1)(2, "div", 2), t._UZ(3, "div", 3), t.qZA(), t.TgZ(4, "div", 5), t.YNc(5, kt, 55, 22, "div", 15), t.qZA(), t.YNc(6, Ut, 20, 7, "div", 16), t.YNc(7, le, 42, 6, "div", 17), t.qZA()()),
                    2 & a)
                ) {
                    const e = t.oxw();
                    t.xp6(5), t.Q6J("ngIf", e.tahunDefault), t.xp6(1), t.Q6J("ngIf", 1 == e.is_detail), t.xp6(1), t.Q6J("ngIf", 1 == e.is_detail_rkpd);
                }
            }
            function I(a, n, e) {
                const i = "#A1A5B7";
                return {
                    series: [{ name: "Nilai Pagu", data: e }],
                    chart: { fontFamily: "inherit", type: "bar", height: a, toolbar: { show: !1 } },
                    plotOptions: { bar: { horizontal: !1, columnWidth: "50%", borderRadius: 5, distributed: !0 } },
                    legend: { show: !1 },
                    dataLabels: { enabled: !1 },
                    stroke: { show: !0, width: 2, colors: ["transparent"] },
                    xaxis: { categories: n, axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { colors: i, fontSize: "12px" } } },
                    yaxis: { labels: { style: { colors: i, fontSize: "12px" }, formatter: (o) => (0, p.uf)(o, "id") } },
                    fill: { type: "solid" },
                    states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "none", value: 0 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "none", value: 0 } } },
                    tooltip: {
                        style: { fontSize: "12px" },
                        y: {
                            formatter: function (o) {
                                return "Rp. " + o.toLocaleString("id");
                            },
                        },
                    },
                    colors: ["#dc3545", "#6f42c1", "#009ef6", "#d63384", "#fd7e14", "#ffc107", "#198754", "#F1416C", "#50CD89", "#009EF7"],
                    grid: { padding: { top: 10 }, borderColor: "#EFF2F5", strokeDashArray: 4, yaxis: { lines: { show: !0 } } },
                };
            }
            function ue(a, n) {
                if ((1 & a && (t.TgZ(0, "option", 41), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.Q6J("value", e.id_daerah), t.xp6(1), t.Oqu(e.nama_daerah);
                }
            }
            function he(a, n) {
                if ((1 & a && (t.TgZ(0, "option", 41), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.Q6J("value", e.id_daerah), t.xp6(1), t.Oqu(e.nama_daerah);
                }
            }
            function pe(a, n) {
                if ((1 & a && (t.TgZ(0, "select", 42)(1, "option", 43), t._uU(2, "-- Pilih --"), t.qZA(), t.YNc(3, he, 2, 2, "option", 12), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(3), t.Q6J("ngForOf", e.kabkot);
                }
            }
            function me(a, n) {
                1 & a && t._UZ(0, "select", 44);
            }
            function _e(a, n) {
                1 & a &&
                    (t.TgZ(0, "tbody")(1, "tr")(2, "td", 45),
                    t._uU(3, "URUSAN WAJIB"),
                    t.qZA(),
                    t.TgZ(4, "td", 46),
                    t._uU(5, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(6, "tr")(7, "td", 45),
                    t._uU(8, "URUSAN PILIHAN"),
                    t.qZA(),
                    t.TgZ(9, "td", 46),
                    t._uU(10, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(11, "tr")(12, "td", 45),
                    t._uU(13, "URUSAN PENDUKUNG"),
                    t.qZA(),
                    t.TgZ(14, "td", 46),
                    t._uU(15, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(16, "tr")(17, "td", 45),
                    t._uU(18, "URUSAN PENUNJANG"),
                    t.qZA(),
                    t.TgZ(19, "td", 46),
                    t._uU(20, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(21, "tr")(22, "td", 45),
                    t._uU(23, "URUSAN PENGAWASAN"),
                    t.qZA(),
                    t.TgZ(24, "td", 46),
                    t._uU(25, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(26, "tr")(27, "td", 45),
                    t._uU(28, "URUSAN KEWILAYAHAN"),
                    t.qZA(),
                    t.TgZ(29, "td", 46),
                    t._uU(30, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(31, "tr")(32, "td", 45),
                    t._uU(33, "URUSAN PEMERINTAHAN UMUM"),
                    t.qZA(),
                    t.TgZ(34, "td", 46),
                    t._uU(35, "Rp. 0"),
                    t.qZA()(),
                    t.TgZ(36, "tr")(37, "td", 45),
                    t._uU(38, "URUSAN KEKHUSUSAN"),
                    t.qZA(),
                    t.TgZ(39, "td", 46),
                    t._uU(40, "Rp. 0"),
                    t.qZA()()());
            }
            function ge(a, n) {
                if ((1 & a && (t.TgZ(0, "td"), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw().$implicit;
                    t.xp6(1), t.Oqu((null == e ? null : e.judul) || "0");
                }
            }
            function fe(a, n) {
                if (1 & a) {
                    const e = t.EpF();
                    t.TgZ(0, "td", 46)(1, "a", 50),
                        t.NdJ("click", function () {
                            t.CHM(e);
                            const r = t.oxw().$implicit,
                                o = t.oxw(2);
                            return o.showDetailUrusanDaerah(o.idUrusanDaerah, o.tahunDefault, r.urusan);
                        }),
                        t._uU(2),
                        t.ALo(3, "number"),
                        t.qZA()();
                }
                if (2 & a) {
                    const e = t.oxw().$implicit;
                    t.xp6(2), t.hij("Rp. ", e.jml ? t.Dn7(3, 1, e.jml, "1.0-0", "id") : "0", "");
                }
            }
            function be(a, n) {
                if ((1 & a && (t.TgZ(0, "tr"), t.YNc(1, ge, 2, 1, "td", 48), t.YNc(2, fe, 4, 5, "td", 49), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.Q6J("ngIf", e), t.xp6(1), t.Q6J("ngIf", e);
                }
            }
            function ve(a, n) {
                if ((1 & a && (t.TgZ(0, "tbody"), t.YNc(1, be, 3, 2, "tr", 47), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.Q6J("ngForOf", e.urusanDaerah);
                }
            }
            function xe(a, n) {
                if ((1 & a && (t.TgZ(0, "div", 51, 52), t._UZ(2, "apx-chart", 53), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.Udp("height", e.chartHeight),
                        t.xp6(2),
                        t.Q6J("series", e.chartOptions.series)("chart", e.chartOptions.chart)("xaxis", e.chartOptions.xaxis)("yaxis", e.chartOptions.yaxis)("dataLabels", e.chartOptions.dataLabels)("stroke", e.chartOptions.stroke)(
                            "legend",
                            e.chartOptions.legend
                        )("fill", e.chartOptions.fill)("states", e.chartOptions.states)("tooltip", e.chartOptions.tooltip)("colors", e.chartOptions.colors)("markers", e.chartOptions.markers)("plotOptions", e.chartOptions.plotOptions);
                }
            }
            function Te(a, n) {
                if ((1 & a && (t.TgZ(0, "td"), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw().$implicit;
                    t.xp6(1), t.Oqu((null == e ? null : e.nama_bidang_urusan) || "0");
                }
            }
            function ye(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 46)(1, "a", 54), t._uU(2), t.ALo(3, "number"), t.qZA()()), 2 & a)) {
                    const e = t.oxw().$implicit;
                    t.xp6(2), t.hij("Rp. ", e.pagu_validasi ? t.Dn7(3, 1, e.pagu_validasi, "1.0-0", "id") : "0", "");
                }
            }
            function Ce(a, n) {
                if ((1 & a && (t.TgZ(0, "tr"), t.YNc(1, Te, 2, 1, "td", 48), t.YNc(2, ye, 4, 5, "td", 49), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.Q6J("ngIf", e), t.xp6(1), t.Q6J("ngIf", e);
                }
            }
            function Me(a, n) {
                if (
                    (1 & a &&
                        (t.TgZ(0, "div", 27)(1, "table", 28)(2, "thead", 29)(3, "tr")(4, "th", 30),
                        t._uU(5, " URUSAN "),
                        t.qZA(),
                        t.TgZ(6, "th", 30),
                        t._uU(7, " PAGU VALIDASI "),
                        t.qZA()()(),
                        t.TgZ(8, "tbody"),
                        t.YNc(9, Ce, 3, 2, "tr", 47),
                        t.qZA()()()),
                    2 & a)
                ) {
                    const e = t.oxw();
                    t.xp6(9), t.Q6J("ngForOf", e.urusanDetailDaerah);
                }
            }
            function J(a, n, e) {
                const i = "#A1A5B7";
                return {
                    series: [{ name: "Nilai Pagu", data: e }],
                    chart: { fontFamily: "inherit", type: "bar", height: a, toolbar: { show: !1 } },
                    plotOptions: { bar: { horizontal: !1, columnWidth: "50%", borderRadius: 5, distributed: !0 } },
                    legend: { show: !1 },
                    dataLabels: { enabled: !1 },
                    stroke: { show: !0, width: 2, colors: ["transparent"] },
                    xaxis: { categories: n, axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { colors: i, fontSize: "12px" } } },
                    yaxis: { labels: { style: { colors: i, fontSize: "12px" } } },
                    fill: { type: "solid" },
                    states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "none", value: 0 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "none", value: 0 } } },
                    tooltip: {
                        style: { fontSize: "12px" },
                        y: {
                            formatter: function (o) {
                                return "Rp. " + o.toLocaleString("id");
                            },
                        },
                    },
                    colors: ["#dc3545", "#6f42c1", "#009ef6", "#d63384", "#fd7e14", "#ffc107", "#198754", "#F1416C", "#50CD89", "#009EF7"],
                    grid: { padding: { top: 10 }, borderColor: "#EFF2F5", strokeDashArray: 4, yaxis: { lines: { show: !0 } } },
                };
            }
            function Ie(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 54), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.judul, " ");
                }
            }
            function we(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.jml_1, " ");
                }
            }
            function Re(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.jml_2, " ");
                }
            }
            function ke(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.jml_3, " ");
                }
            }
            function Ae(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.jml_4, " ");
                }
            }
            function Pe(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.jml_5, " ");
                }
            }
            function Se(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDProv.jml_6, " ");
                }
            }
            function Ze(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 54), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.judul, " ");
                }
            }
            function Ne(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.jml_1, " ");
                }
            }
            function Ee(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.jml_2, " ");
                }
            }
            function Ue(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.jml_3, " ");
                }
            }
            function Be(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.jml_4, " ");
                }
            }
            function Le(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.jml_5, " ");
                }
            }
            function Fe(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDKabkot.jml_6, " ");
                }
            }
            function Oe(a, n) {
                1 & a && (t.TgZ(0, "td", 54), t._uU(1, "Total"), t.qZA());
            }
            function je(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDTotal.jml_1, " ");
                }
            }
            function Ge(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDTotal.jml_2, " ");
                }
            }
            function Ke(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDTotal.jml_3, " ");
                }
            }
            function He(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDTotal.jml_4, " ");
                }
            }
            function Qe(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDTotal.jml_5, " ");
                }
            }
            function qe(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 55), t._uU(1), t.qZA()), 2 & a)) {
                    const e = t.oxw();
                    t.xp6(1), t.hij(" ", e.RKPDTotal.jml_6, " ");
                }
            }
            function Ye(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " Kode Wil "), t.qZA());
            }
            function Je(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 57), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", e.kode_ddn, " ");
                }
            }
            function $e(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " Nama Wilayah "), t.qZA());
            }
            function ze(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 57), t._uU(1), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", e.nama_daerah, " ");
                }
            }
            function Ve(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " Pagu "), t.qZA());
            }
            function We(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 57), t._uU(1), t.ALo(2, "number"), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.xp6(1), t.hij(" ", t.Dn7(2, 1, e.pagu, "1.0-0", "id"), " ");
                }
            }
            function Xe(a, n) {
                1 & a && t._UZ(0, "span", 58), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen034.svg");
            }
            function ta(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " Persiapan "), t.qZA());
            }
            function ea(a, n) {
                1 & a && t._UZ(0, "span", 61), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function aa(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 59), t.YNc(1, ea, 1, 1, "span", 60), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(128);
                    t.xp6(1), t.Q6J("ngIf", e.cek_1)("ngIfElse", i);
                }
            }
            function ia(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " RKPD Ranwal "), t.qZA());
            }
            function na(a, n) {
                1 & a && t._UZ(0, "span", 63), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function ra(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 59), t.YNc(1, na, 1, 1, "span", 62), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(128);
                    t.xp6(1), t.Q6J("ngIf", e.cek_2)("ngIfElse", i);
                }
            }
            function oa(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " RKPD Perancangan "), t.qZA());
            }
            function sa(a, n) {
                1 & a && t._UZ(0, "span", 65), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function la(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 59), t.YNc(1, sa, 1, 1, "span", 64), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(128);
                    t.xp6(1), t.Q6J("ngIf", e.cek_3)("ngIfElse", i);
                }
            }
            function da(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " Musrenbang "), t.qZA());
            }
            function ca(a, n) {
                1 & a && t._UZ(0, "span", 67), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function ua(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 59), t.YNc(1, ca, 1, 1, "span", 66), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(128);
                    t.xp6(1), t.Q6J("ngIf", e.cek_4)("ngIfElse", i);
                }
            }
            function ha(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " RKPD Akhir "), t.qZA());
            }
            function pa(a, n) {
                1 & a && t._UZ(0, "span", 69), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function ma(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 59), t.YNc(1, pa, 1, 1, "span", 68), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(128);
                    t.xp6(1), t.Q6J("ngIf", e.cek_5)("ngIfElse", i);
                }
            }
            function _a(a, n) {
                1 & a && (t.TgZ(0, "th", 56), t._uU(1, " RKPD Final "), t.qZA());
            }
            function ga(a, n) {
                1 & a && t._UZ(0, "span", 71), 2 & a && t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen037.svg");
            }
            function fa(a, n) {
                if ((1 & a && (t.TgZ(0, "td", 59), t.YNc(1, ga, 1, 1, "span", 70), t.qZA()), 2 & a)) {
                    const e = n.$implicit;
                    t.oxw();
                    const i = t.MAs(128);
                    t.xp6(1), t.Q6J("ngIf", e.cek_6)("ngIfElse", i);
                }
            }
            function ba(a, n) {
                1 & a && t._UZ(0, "tr", 72);
            }
            function va(a, n) {
                1 & a && t._UZ(0, "tr", 73);
            }
            const xa = function () {
                return [10];
            };
            function U(a, n, e) {
                const i = "#A1A5B7";
                return {
                    series: [{ name: "Total", data: e }],
                    chart: { fontFamily: "inherit", type: "bar", height: a, toolbar: { show: !1 } },
                    plotOptions: { bar: { horizontal: !1, columnWidth: "50%", borderRadius: 5, distributed: !0 } },
                    legend: { show: !1 },
                    dataLabels: { enabled: !1 },
                    stroke: { show: !0, width: 2, colors: ["transparent"] },
                    xaxis: { categories: n, axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { colors: i, fontSize: "12px" } } },
                    yaxis: { labels: { style: { colors: i, fontSize: "12px" } } },
                    fill: { type: "solid" },
                    states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "none", value: 0 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "none", value: 0 } } },
                    tooltip: {
                        style: { fontSize: "12px" },
                        y: {
                            formatter: function (o) {
                                return o.toLocaleString("id");
                            },
                        },
                    },
                    colors: ["#dc3545", "#6f42c1", "#009ef6", "#d63384", "#fd7e14", "#ffc107", "#198754", "#F1416C", "#50CD89", "#009EF7"],
                    grid: { padding: { top: 10 }, borderColor: "#EFF2F5", strokeDashArray: 4, yaxis: { lines: { show: !0 } } },
                };
            }
            const ya = [
                {
                    path: "",
                    component: Dt,
                    children: [
                        { path: "", redirectTo: "/dashboard/pusat", pathMatch: "full" },
                        {
                            path: "pusat",
                            component: (() => {
                                class a {
                                    constructor(e, i, r, o) {
                                        (this.change = e),
                                            (this.tahunAnggaranService = i),
                                            (this.konfigurasiService = r),
                                            (this.dashboard = o),
                                            (this.userSession = JSON.parse(localStorage.getItem("v0.0.0-authf649fc9a5f55"))),
                                            (this.konfigurasiSession = JSON.parse(localStorage.getItem("sipd-konfigurasi"))),
                                            (this.opsiUrusan = "global"),
                                            (this.is_detail = 0),
                                            (this.is_detail_rkpd = 0),
                                            (this.displayedColumns = ["kode_wil_prop", "nama_prop", "kode_wil", "nama_wil"]),
                                            (this.displayedRKPDColumns = ["kode_ddn", "nama_daerah", "cek_1", "cek_2", "cek_3", "cek_4", "cek_5", "cek_6"]),
                                            (this.displayedRekapColumns = ["kode_ddn", "nama_daerah"]),
                                            (this.dataSource = new c.by(this.ELEMENT_DATA)),
                                            (this.dataSourceUrusan = new c.by(this.ELEMENT_URUSAN)),
                                            (this.dataSourceRekap = new c.by(this.ELEMENT_REKAP)),
                                            (this.dataSourceRKPD = new c.by(this.ELEMENT_RKPD)),
                                            (this.chartColor = ""),
                                            (this.chartOptions = {}),
                                            (this.div1 = !0),
                                            (this.div2 = !1),
                                            (this.divUrusanGrafik = !0),
                                            (this.divUrusanTabel = !1),
                                            (this.divUrusanDetail = !1),
                                            (this.tahunAnggaranList = []),
                                            (this.activeTab = "tab_murni");
                                    }
                                    set matPaginator(e) {
                                        (this.dataSourceRekap.paginator = e.toArray()[0]), (this.dataSourceRKPD.paginator = e.toArray()[0]);
                                    }
                                    set matSort(e) {
                                        (this.dataSourceRekap.sort = e.toArray()[0]), (this.dataSourceRKPD.sort = e.toArray()[0]);
                                    }
                                    ngOnInit() {
                                        (0, p.qS)(N.Z), this.loadTahunAnggaran(), this.loadDataRekapJadwal(), (this.tahunDefault = new Date().getFullYear().toString()), this.pilihTahun(this.tahunDefault);
                                    }
                                    ngAfterViewInit() {}
                                    setTab(e) {
                                        this.activeTab = e;
                                    }
                                    activeClass(e) {
                                        return e === this.activeTab ? "show active" : "";
                                    }
                                    pilihTahun(e) {
                                        var i;
                                        let r;
                                        (r = (null === (i = e.target) || void 0 === i ? void 0 : i.value) ? e.target.value : e),
                                            (this.judulUrusan = "Total Pagu Belanja"),
                                            (this.tahunDefault = r),
                                            (this.urusanCurrent = "0"),
                                            this.dashboard.getData(r).subscribe((o) => {
                                                (this.rekapTahun = o.data), (this.urusan = o.data.urusan), (this.detailUrusan = this.urusan);
                                                let s = 0,
                                                    l = [],
                                                    u = [];
                                                this.urusan.forEach((h) => {
                                                    (s += Number(h.jml)), l.push(h.judul), u.push(h.jml);
                                                }),
                                                    (this.JMLurusan = s),
                                                    (this.chartOptions = I("500px", l, u)),
                                                    this.change.markForCheck();
                                            });
                                    }
                                    showData(e, i, r) {
                                        let o;
                                        switch (
                                            (this.dashboard.getDetailData(e, i, r).subscribe((s) => {
                                                this.dataSource.data = s.data.data;
                                            }),
                                            i)
                                        ) {
                                            case "rkpd":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi RKPD tahun " + e.toString();
                                                break;
                                            case "kua":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi KUA PPAS " + e.toString();
                                                break;
                                            case "rapbd":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi RAPBD " + e.toString();
                                                break;
                                            case "apbd":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi APBD " + e.toString();
                                                break;
                                            case "apbdgeser":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi Pergeseran APBD " + e.toString();
                                                break;
                                            case "rkpdpak":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi Perubahan RKPD " + e.toString();
                                                break;
                                            case "kuapak":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi Perubahan KUA PPAS " + e.toString();
                                                break;
                                            case "apbdpak":
                                                o = r[0] + r.slice(1).toLowerCase() + " mengisi Perubahan APBD " + e.toString();
                                                break;
                                            default:
                                                o = "";
                                        }
                                        (this.judulTahap = o), (this.div1 = !1), (this.div2 = !0);
                                    }
                                    detailUrusanGlobal() {
                                        this.opsiUrusan = "global";
                                        let e = [],
                                            i = [];
                                        this.urusan.forEach((r) => {
                                            e.push(r.judul), i.push(r.jml);
                                        }),
                                            (this.chartOptions = I("500px", e, i)),
                                            (this.divUrusanGrafik = !0),
                                            (this.divUrusanTabel = !1),
                                            (this.divUrusanDetail = !1),
                                            this.change.markForCheck();
                                    }
                                    prosesUrusan(e, i) {
                                        let r = e.target.value;
                                        if (((this.opsiUrusan = i), "global" == i))
                                            if ("grafik" == r) {
                                                let o = [],
                                                    s = [];
                                                this.urusan.forEach((l) => {
                                                    o.push(l.judul), s.push(l.jml);
                                                }),
                                                    (this.chartOptions = I("500px", o, s)),
                                                    (this.divUrusanGrafik = !0),
                                                    (this.divUrusanTabel = !1),
                                                    (this.divUrusanDetail = !1);
                                            } else
                                                "tabel" == r
                                                    ? ((this.detailUrusan = this.urusan), (this.divUrusanGrafik = !1), (this.divUrusanTabel = !0), (this.divUrusanDetail = !1))
                                                    : ((this.divUrusanGrafik = !1), (this.divUrusanTabel = !1), (this.divUrusanDetail = !0), this.getDetailUrusan(this.tahunDefault, "0"));
                                        else if ("bidang" == i)
                                            if ("grafik" == r) {
                                                let o = [],
                                                    s = [];
                                                this.detailUrusan.forEach((l) => {
                                                    o.push(l.judul), s.push(l.jml);
                                                }),
                                                    (this.chartOptions = I("500px", o, s)),
                                                    (this.divUrusanGrafik = !0),
                                                    (this.divUrusanTabel = !1),
                                                    (this.divUrusanDetail = !1);
                                            } else
                                                "tabel" == r
                                                    ? ((this.divUrusanGrafik = !1), (this.divUrusanTabel = !0), (this.divUrusanDetail = !1))
                                                    : ((this.divUrusanGrafik = !1), (this.divUrusanTabel = !1), (this.divUrusanDetail = !0), this.getDetailUrusan(this.tahunDefault, this.urusanCurrent));
                                        this.change.markForCheck();
                                    }
                                    showDetailUrusan(e, i, r) {
                                        this.dashboard.getRekapUrusan(e, i).subscribe((o) => {
                                            (this.opsiUrusan = "bidang"), (this.urusanCurrent = i), (this.judulUrusan = r), (this.detailUrusan = o.data.data);
                                            let s = [],
                                                l = [];
                                            this.detailUrusan.forEach((u) => {
                                                s.push(u.judul), l.push(u.jml);
                                            }),
                                                (this.chartOptions = I("500px", s, l)),
                                                (this.divUrusanGrafik = !0),
                                                (this.divUrusanTabel = !1),
                                                (this.divUrusanDetail = !1),
                                                this.change.markForCheck();
                                        });
                                    }
                                    showDetailBidang(e, i, r) {
                                        this.dashboard.getDetailBidang(e, i).subscribe((o) => {
                                            (this.dataSourceUrusan.data = o.data.data), (this.judulUrusan = r), (this.divUrusanGrafik = !1), (this.divUrusanTabel = !1), (this.divUrusanDetail = !0), this.change.markForCheck();
                                        });
                                    }
                                    getDetailUrusan(e, i) {
                                        this.dashboard.getDetailUrusan(e, i).subscribe((r) => {
                                            (this.dataSourceUrusan.data = r.data.data), this.change.markForCheck();
                                        });
                                    }
                                    applyFilter(e) {
                                        let i;
                                        (i = e.target.value), (this.dataSourceRekap.filter = null == i ? void 0 : i.toLowerCase());
                                    }
                                    applyFilterUrusan(e) {
                                        let i;
                                        (i = e.target.value), (this.dataSourceUrusan.filter = null == i ? void 0 : i.toLowerCase());
                                    }
                                    loadTahunAnggaran() {
                                        const e = new FormData();
                                        e.append("id_daerah", String(this.konfigurasiService.getIdDaerah() || 0)),
                                            (this.tahunAnggaranSub = this.tahunAnggaranService.list(e).subscribe({
                                                next: (i) => {
                                                    this.tahunAnggaranList = i.data;
                                                },
                                            }));
                                    }
                                    loadDataRekapJadwal() {
                                        this.dashboard.getRekapAll(2024).subscribe({
                                            next: (e) => {
                                                this.rekapData = e.data;
                                            },
                                            error: (e) => {},
                                        });
                                    }
                                    showDetailRekap(e, i) {
                                        "rkpd" == e ? ((this.is_detail = 0), (this.is_detail_rkpd = 1)) : ((this.is_detail = 1), (this.is_detail_rkpd = 0)),
                                            (this.judulDetail = "Detail " + e),
                                            this.dashboard.getDetailRekapAll(e, i).subscribe({
                                                next: (r) => {
                                                    "rkpd" == e ? (this.dataSourceRKPD.data = r.data) : (this.dataSourceRekap.data = r.data);
                                                },
                                                error: (r) => {},
                                            });
                                    }
                                    applyFilterRKPD(e) {
                                        let i;
                                        (i = e.target.value), (this.dataSourceRKPD.filter = null == i ? void 0 : i.toLowerCase());
                                    }
                                }
                                return (
                                    (a.ɵfac = function (e) {
                                        return new (e || a)(t.Y36(t.sBO), t.Y36(It.d), t.Y36(Q.W), t.Y36(E));
                                    }),
                                    (a.ɵcmp = t.Xpm({
                                        type: a,
                                        selectors: [["app-dashboard-pusat"]],
                                        viewQuery: function (e, i) {
                                            if ((1 & e && (t.Gf(D.NW, 5), t.Gf(x.YE, 5)), 2 & e)) {
                                                let r;
                                                t.iGM((r = t.CRH())) && (i.matPaginator = r), t.iGM((r = t.CRH())) && (i.matSort = r);
                                            }
                                        },
                                        inputs: { chartColor: "chartColor", chartHeight: "chartHeight" },
                                        decls: 2,
                                        vars: 2,
                                        consts: [
                                            [4, "ngIf"],
                                            [1, "card", "card-xl-stretch", "mb-xl-8"],
                                            [1, "card-header", "border-0", "pt-5"],
                                            [1, "card-title"],
                                            [1, "text-dark", "fw-semibold", "fs-1", "me-2"],
                                            [1, "card-body", "py-3", "sipd-container"],
                                            [1, "separator", "separator-dashed", "my-3"],
                                            [1, "d-flex", "flex-stack"],
                                            [1, "text-dark", "fs-6", "me-2"],
                                            [1, "badge", "badge-primary"],
                                            ["href", "./assets/media/manual/PANDUAN_PEMUTAKHIRAN_SIPD_RI.pdf", 1, "text-white"],
                                            ["href", "./assets/media/manual/PANDUAN_PEMINDAHAN_RINCIAN_BELANJA_ANTAR_SUB_KEGIATAN.pdf", 1, "text-white"],
                                            ["href", "./assets/media/manual/MANUAL_BOOK_BERITA_ACARA_KESEPAKATAN_SIPD_RI.pdf", 1, "text-white"],
                                            ["href", "./assets/media/manual/Kepmendagri_Nomor_900.1.15.5-1317_Tahun_2023.pdf", 1, "text-white"],
                                            [1, "my-5"],
                                            ["class", "row ps-3 mt-n10 position-relative", 4, "ngIf"],
                                            ["class", "card card-xl-stretch mb-xl-8", 4, "ngIf"],
                                            ["class", "row g-0 pb-3", 4, "ngIf"],
                                            [1, "row", "ps-3", "mt-n10", "position-relative"],
                                            [1, "row", "g-0", "pb-3"],
                                            [1, "col", "col-lg-12"],
                                            [1, "col", "fw-bold", "mb-1", "pe-7"],
                                            [1, "title", "fw-bold"],
                                            ["name", "tahun", "ngbTooltip", "Pilih tahun anggaran", "tooltipClass", "tooltip-dark", 1, "form-select", "form-select-solid", 3, "value", "change"],
                                            ["value", "", "selected", ""],
                                            [3, "value", 4, "ngFor", "ngForOf"],
                                            [1, "row", "col-lg-12", "px-3"],
                                            [1, "col", "col-lg-3", "bg-danger", "px-6", "py-5", "rounded-2", "me-3", "mb-1", 2, "width", "24% !important"],
                                            [1, "col"],
                                            [1, "float-end", "text-light-danger", "ms-auto"],
                                            [1, "d-flex", "flex-column", "text-light-end"],
                                            [1, "text-light-danger", "fs-2", "mb-0"],
                                            [1, "text-light-danger", "fs-1", "mb-0"],
                                            ["href", "/dashboard/pusat#", "ngbTooltip", "Detail RPJMD yang sudah mengisi", "tooltipClass", "tooltip-dark", 1, "text-light-danger", 3, "click"],
                                            [1, "col", "col-lg-3", "bg-success", "px-6", "py-5", "rounded-2", "me-3", "mb-1", 2, "width", "24% !important"],
                                            [1, "float-end", "text-light-success", "ms-auto"],
                                            [1, "text-light-success", "fs-2", "mb-0"],
                                            [1, "text-light-success", "fs-1", "mb-0"],
                                            ["href", "/dashboard/pusat#", "ngbTooltip", "Detail RPD yang sudah mengisi", "tooltipClass", "tooltip-dark", 1, "text-light-success", 3, "click"],
                                            [1, "col", "col-lg-3", "bg-info", "px-6", "py-5", "rounded-2", "me-3", "mb-1", 2, "width", "24% !important"],
                                            [1, "float-end", "text-light-info", "ms-auto"],
                                            [1, "text-light-info", "fs-2", "mb-0"],
                                            [1, "text-light-info", "fs-1", "mb-0"],
                                            ["href", "/dashboard/pusat#", "ngbTooltip", "Detail RENSTRA yang sudah mengisi", "tooltipClass", "tooltip-dark", 1, "text-light-info", 3, "click"],
                                            [1, "col", "col-lg-3", "bg-primary", "px-6", "py-5", "rounded-2", "me-3", "mb-1", 2, "width", "24% !important"],
                                            [1, "float-end", "text-light-primary", "ms-auto"],
                                            [1, "text-light-primary", "fs-2", "mb-0"],
                                            [1, "text-light-primary", "fs-1", "mb-0"],
                                            ["href", "/dashboard/pusat#", "ngbTooltip", "Detail RKPD yang sudah mengisi", "tooltipClass", "tooltip-dark", 1, "text-light-primary", 3, "click"],
                                            [3, "value"],
                                            [1, "card-header", "border-1", "py-0"],
                                            [1, "card-toolbar"],
                                            [1, "svg-icon", "svg-icon-1", "position-absolute", "ms-4", 3, "inlineSVG"],
                                            ["type", "text", "placeholder", "Pencarian", 1, "form-control", "form-control-solid", "w-250px", "ps-14", 3, "keyup"],
                                            [1, "card-body", "py-0"],
                                            [1, "table-responsive"],
                                            ["mat-table", "", "matSort", "", 1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", 3, "dataSource"],
                                            ["matColumnDef", "kode_ddn"],
                                            ["mat-header-cell", "", "mat-sort-header", "", "class", "fw-bolder text-muted", 4, "matHeaderCellDef"],
                                            ["mat-cell", "", "class", "py-1 my-1", 4, "matCellDef"],
                                            ["matColumnDef", "nama_daerah"],
                                            ["mat-header-row", "", "style", "height: 30px !important", 4, "matHeaderRowDef"],
                                            ["mat-row", "", "style", "height: 35px !important", 4, "matRowDef", "matRowDefColumns"],
                                            ["showFirstLastButtons", "", 3, "pageSizeOptions"],
                                            ["mat-header-cell", "", "mat-sort-header", "", 1, "fw-bolder", "text-muted"],
                                            ["mat-cell", "", 1, "py-1", "my-1"],
                                            ["mat-header-row", "", 2, "height", "30px !important"],
                                            ["mat-row", "", 2, "height", "35px !important"],
                                            ["mat-header-cell", "", "mat-sort-header", "", "class", "text-center", 4, "matHeaderCellDef"],
                                            ["mat-cell", "", 4, "matCellDef"],
                                            ["elseNo1", ""],
                                            ["matColumnDef", "cek_1"],
                                            ["mat-cell", "", "class", "text-center", 4, "matCellDef"],
                                            ["matColumnDef", "cek_2"],
                                            ["matColumnDef", "cek_3"],
                                            ["matColumnDef", "cek_4"],
                                            ["matColumnDef", "cek_5"],
                                            ["matColumnDef", "cek_6"],
                                            ["mat-header-row", "", "class", "fw-bolder", "style", "height: 30px !important;", 4, "matHeaderRowDef"],
                                            ["mat-row", "", "style", "height: 35px !important;", 4, "matRowDef", "matRowDefColumns"],
                                            ["mat-header-cell", "", "mat-sort-header", "", 1, "text-center"],
                                            ["mat-cell", ""],
                                            [1, "svg-icon", "svg-icon-gray-300", "svg-icon-1", 3, "inlineSVG"],
                                            ["mat-cell", "", 1, "text-center"],
                                            ["class", "svg-icon svg-icon-danger svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-danger", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-warning svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-warning", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-success svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-success", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-primary svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-primary", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-info svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-info", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-dark svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-dark", "svg-icon-1", 3, "inlineSVG"],
                                            ["mat-header-row", "", 1, "fw-bolder", 2, "height", "30px !important"],
                                        ],
                                        template: function (e, i) {
                                            1 & e && (t.YNc(0, wt, 41, 0, "div", 0), t.YNc(1, de, 8, 3, "div", 0)),
                                                2 & e && (t.Q6J("ngIf", 1 != i.userSession.level_id && 46 != i.userSession.level_id), t.xp6(1), t.Q6J("ngIf", 1 == i.userSession.level_id || 46 == i.userSession.level_id));
                                        },
                                        directives: [p.O5, H._L, m.YN, m.Kr, p.sg, S.d$, c.BZ, x.YE, c.w1, c.fO, c.ge, x.nU, c.Dz, c.ev, c.as, c.XQ, c.nj, c.Gk, D.NW],
                                        pipes: [p.JJ],
                                        styles: [""],
                                    })),
                                    a
                                );
                            })(),
                        },
                        {
                            path: "daerah",
                            component: (() => {
                                class a {
                                    constructor(e, i, r) {
                                        (this.dashboard = e), (this.formBuilder = i), (this.change = r), (this.chartColor = ""), (this.chartOptions = {}), (this.divUrusanGrafik = !0), (this.divUrusanTabel = !1);
                                    }
                                    ngOnInit() {
                                        this.getProvinsi(),
                                            (0, p.qS)(N.Z),
                                            (this.tahunDefault = new Date().getFullYear().toString()),
                                            (this.filterForm = this.formBuilder.group({ tahundaerah: [this.tahunDefault, m.kI.required], provinsiselect: ["", m.kI.required], kabkotselect: [""] }));
                                    }
                                    ngAfterViewInit() {}
                                    getProvinsi() {
                                        this.dashboard.getProvinsi().subscribe((e) => {
                                            (this.provinsi = e.data), this.change.markForCheck();
                                        });
                                    }
                                    pilihKabkot(e) {
                                        this.dashboard.getKabkot(e.target.value).subscribe((i) => {
                                            this.kabkot = i.data;
                                        });
                                    }
                                    prosesFilter() {
                                        this.filterForm.valid &&
                                            this.dashboard.getRekapUrusanDaerah(this.filterForm).subscribe((e) => {
                                                (this.tahunDefault = this.filterForm.controls.tahundaerah.value), (this.urusanDaerah = e.data.urusan);
                                                let i = 0,
                                                    r = [],
                                                    o = [];
                                                this.urusanDaerah.forEach((s) => {
                                                    (i += Number(s.jml)), r.push(s.judul), o.push(s.jml);
                                                }),
                                                    (this.idUrusanDaerah = "" != this.filterForm.controls.kabkotselect.value ? this.filterForm.controls.kabkotselect.value : this.filterForm.controls.provinsiselect.value),
                                                    (this.JMLurusanDaerah = i),
                                                    (this.divUrusanGrafik = !0),
                                                    (this.divUrusanTabel = !1),
                                                    (this.chartOptions = J("500px", r, o)),
                                                    this.change.markForCheck();
                                            });
                                    }
                                    showDetailUrusanDaerah(e, i, r) {
                                        this.dashboard.getDetailUrusanDaerah(e, i, r).subscribe((o) => {
                                            this.urusanDetailDaerah = o.data.data;
                                            let s = 0,
                                                l = [],
                                                u = [];
                                            this.urusanDetailDaerah.forEach((h) => {
                                                (s += Number(h.pagu_validasi)), l.push(h.nama_bidang_urusan), u.push(h.pagu_validasi);
                                            }),
                                                (this.idUrusanDaerah = "" != this.filterForm.controls.kabkotselect.value ? this.filterForm.controls.kabkotselect.value : this.filterForm.controls.provinsiselect.value),
                                                (this.divUrusanGrafik = !0),
                                                (this.divUrusanTabel = !1),
                                                (this.chartOptions = J("500px", l, u)),
                                                this.change.markForCheck();
                                        });
                                    }
                                    showDetailUrusan(e) {
                                        console.log(e.target.value),
                                            "grafik" == e.target.value ? ((this.divUrusanGrafik = !0), (this.divUrusanTabel = !1)) : ((this.divUrusanGrafik = !1), (this.divUrusanTabel = !0)),
                                            this.change.markForCheck();
                                    }
                                }
                                return (
                                    (a.ɵfac = function (e) {
                                        return new (e || a)(t.Y36(E), t.Y36(m.qu), t.Y36(t.sBO));
                                    }),
                                    (a.ɵcmp = t.Xpm({
                                        type: a,
                                        selectors: [["app-dashboard-daerah"]],
                                        inputs: { chartColor: "chartColor", chartHeight: "chartHeight" },
                                        decls: 73,
                                        vars: 14,
                                        consts: [
                                            [1, "row", "ps-3", "mt-n10", "position-relative"],
                                            ["novalidate", "novalidate", 3, "formGroup"],
                                            [1, "row", "g-0", "pb-3"],
                                            [1, "col", "col-lg-2"],
                                            [1, "col", "fw-bold", "mb-1", "pe-7"],
                                            [1, "title", "fw-bold"],
                                            ["formControlName", "tahundaerah", 1, "form-select", "form-select-solid", 3, "value"],
                                            ["value", "2020"],
                                            ["value", "2021"],
                                            ["value", "2022"],
                                            ["value", "2023"],
                                            ["formControlName", "provinsiselect", 1, "form-select", "form-select-solid", 3, "change"],
                                            [3, "value", 4, "ngFor", "ngForOf"],
                                            ["class", "form-select form-select-solid", "formControlName", "kabkotselect", 4, "ngIf", "ngIfElse"],
                                            ["elseKabkot", ""],
                                            [1, "col", "col-lg-2", "pt-6"],
                                            [1, "btn", "btn-info", 3, "click"],
                                            [1, "row", "gy-5", "g-xl-8"],
                                            [1, "col-xl-5"],
                                            [1, "card", "card-xl-stretch", "mb-xl-8"],
                                            [1, "card-header", "border-0"],
                                            [1, "card-title", "fw-bolder", "text-dark"],
                                            [1, "card-body", "pt-2"],
                                            [1, "d-flex", "align-items-center", "bg-light-primary", "rounded", "p-5", "mb-7"],
                                            [1, "flex-grow-1", "me-2", "text-end"],
                                            ["href", "/dashboar/daerah#urusan", 1, "fw-bolder", "text-primarytext-hover-primary", "fs-1"],
                                            [1, "text-muted", "fw-bold", "d-block"],
                                            [1, "table-responsive"],
                                            [1, "table", "table-striped", "gs-2", "gy-5", "gx-7"],
                                            [2, "height", "45px"],
                                            [1, "text-muted", "fw-bold", "fs-3"],
                                            ["elseBlockUrusan", ""],
                                            [4, "ngIf", "ngIfElse"],
                                            ["id", "urusan", "name", "urusan", 1, "col-xl-7"],
                                            [1, "card-title"],
                                            [1, "card-toolbar"],
                                            ["name", "jenisDetail", 1, "form-select", "form-select-solid", 3, "change"],
                                            ["value", "grafik"],
                                            ["value", "tabel"],
                                            ["class", "mixed-widget-10-chart", 3, "height", 4, "ngIf"],
                                            ["class", "table-responsive", 4, "ngIf"],
                                            [3, "value"],
                                            ["formControlName", "kabkotselect", 1, "form-select", "form-select-solid"],
                                            ["value", ""],
                                            [1, "form-select", "form-select-solid"],
                                            [1, ""],
                                            [1, "text-end"],
                                            [4, "ngFor", "ngForOf"],
                                            [4, "ngIf"],
                                            ["class", "text-end", 4, "ngIf"],
                                            ["href", "/dashboard/daerah#urusan", 1, "text-dark", 3, "click"],
                                            [1, "mixed-widget-10-chart"],
                                            ["chartRef", ""],
                                            [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "stroke", "legend", "fill", "states", "tooltip", "colors", "markers", "plotOptions"],
                                            ["href", "/dashboard/daerah#urusan", 1, "text-dark"],
                                        ],
                                        template: function (e, i) {
                                            if (
                                                (1 & e &&
                                                    (t.TgZ(0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5),
                                                    t._uU(6, "Tahun"),
                                                    t.qZA(),
                                                    t.TgZ(7, "select", 6)(8, "option", 7),
                                                    t._uU(9, "2020"),
                                                    t.qZA(),
                                                    t.TgZ(10, "option", 8),
                                                    t._uU(11, "2021"),
                                                    t.qZA(),
                                                    t.TgZ(12, "option", 9),
                                                    t._uU(13, "2022"),
                                                    t.qZA(),
                                                    t.TgZ(14, "option", 10),
                                                    t._uU(15, "2023"),
                                                    t.qZA()()()(),
                                                    t.TgZ(16, "div", 3)(17, "div", 4)(18, "div", 5),
                                                    t._uU(19, "Provinsi"),
                                                    t.qZA(),
                                                    t.TgZ(20, "select", 11),
                                                    t.NdJ("change", function (o) {
                                                        return i.pilihKabkot(o);
                                                    }),
                                                    t.YNc(21, ue, 2, 2, "option", 12),
                                                    t.qZA()()(),
                                                    t.TgZ(22, "div", 3)(23, "div", 4)(24, "div", 5),
                                                    t._uU(25, "Kabupaten/Kota"),
                                                    t.qZA(),
                                                    t.YNc(26, pe, 4, 1, "select", 13),
                                                    t.YNc(27, me, 1, 0, "ng-template", null, 14, t.W1O),
                                                    t.qZA()(),
                                                    t.TgZ(29, "div", 15)(30, "button", 16),
                                                    t.NdJ("click", function () {
                                                        return i.prosesFilter();
                                                    }),
                                                    t._uU(31, "Proses"),
                                                    t.qZA()()()(),
                                                    t.TgZ(32, "div", 17)(33, "div", 18)(34, "div", 19)(35, "div", 20)(36, "h3", 21),
                                                    t._uU(37, "Urusan"),
                                                    t.qZA()(),
                                                    t.TgZ(38, "div", 22)(39, "div", 23)(40, "div", 24)(41, "a", 25),
                                                    t._uU(42),
                                                    t.ALo(43, "number"),
                                                    t.qZA(),
                                                    t.TgZ(44, "span", 26),
                                                    t._uU(45, "Total Pagu Belanja"),
                                                    t.qZA()()(),
                                                    t.TgZ(46, "div", 27)(47, "table", 28)(48, "thead", 29)(49, "tr")(50, "th", 30),
                                                    t._uU(51, " URUSAN "),
                                                    t.qZA(),
                                                    t.TgZ(52, "th", 30),
                                                    t._uU(53, " PAGU VALIDASI "),
                                                    t.qZA()()(),
                                                    t.YNc(54, _e, 41, 0, "ng-template", null, 31, t.W1O),
                                                    t.YNc(56, ve, 2, 1, "tbody", 32),
                                                    t.qZA()()()()(),
                                                    t.TgZ(57, "div", 33)(58, "div", 19)(59, "div", 20)(60, "div", 34)(61, "h4"),
                                                    t._uU(62, "Detail Urusan"),
                                                    t.qZA()(),
                                                    t.TgZ(63, "div", 35)(64, "div", 4)(65, "select", 36),
                                                    t.NdJ("change", function (o) {
                                                        return i.showDetailUrusan(o);
                                                    }),
                                                    t.TgZ(66, "option", 37),
                                                    t._uU(67, "Grafik"),
                                                    t.qZA(),
                                                    t.TgZ(68, "option", 38),
                                                    t._uU(69, "Tabel"),
                                                    t.qZA()()()()(),
                                                    t.TgZ(70, "div", 22),
                                                    t.YNc(71, xe, 3, 15, "div", 39),
                                                    t.YNc(72, Me, 10, 1, "div", 40),
                                                    t.qZA()()()()()),
                                                2 & e)
                                            ) {
                                                const r = t.MAs(28),
                                                    o = t.MAs(55);
                                                t.xp6(1),
                                                    t.Q6J("formGroup", i.filterForm),
                                                    t.xp6(6),
                                                    t.Q6J("value", i.tahunDefault),
                                                    t.xp6(14),
                                                    t.Q6J("ngForOf", i.provinsi),
                                                    t.xp6(5),
                                                    t.Q6J("ngIf", i.kabkot)("ngIfElse", r),
                                                    t.xp6(16),
                                                    t.hij("Rp. ", t.Dn7(43, 10, i.JMLurusanDaerah, "1.0-0", "id"), ""),
                                                    t.xp6(14),
                                                    t.Q6J("ngIf", i.urusanDaerah)("ngIfElse", o),
                                                    t.xp6(15),
                                                    t.Q6J("ngIf", i.divUrusanGrafik),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.divUrusanTabel);
                                            }
                                        },
                                        directives: [m._Y, m.JL, m.sg, m.EJ, m.JJ, m.u, m.YN, m.Kr, p.sg, p.O5, Z.x],
                                        pipes: [p.JJ],
                                        styles: [""],
                                    })),
                                    a
                                );
                            })(),
                        },
                        {
                            path: "bangda",
                            component: (() => {
                                class a {
                                    constructor(e, i) {
                                        (this.dashboard = e),
                                            (this.change = i),
                                            (this.jenisRKPD = "1"),
                                            (this.displayedColumns = ["kode_ddn", "nama_daerah", "pagu", "cek_1", "cek_2", "cek_3", "cek_4", "cek_5", "cek_6"]),
                                            (this.dataSource = new c.by(this.ELEMENT_DATA)),
                                            (this.chartColor = ""),
                                            (this.chartOptions = {}),
                                            (this.chartOptionsProv = {}),
                                            (this.chartOptionsKabkot = {}),
                                            (this.dataSourceRKPD = new c.by(this.ELEMENT_RKPD));
                                    }
                                    set matPaginator(e) {
                                        this.dataSourceRKPD.paginator = e.toArray()[0];
                                    }
                                    set matSort(e) {
                                        this.dataSourceRKPD.sort = e.toArray()[0];
                                    }
                                    ngOnInit() {
                                        (0, p.qS)(N.Z);
                                    }
                                    showRekapRKPD(e, i) {
                                        var r, o;
                                        let s, l;
                                        (s = (null === (r = null == e ? void 0 : e.target) || void 0 === r ? void 0 : r.value) ? e.target.value : e),
                                            (this.tahunDefault = s),
                                            (l = (null === (o = null == i ? void 0 : i.target) || void 0 === o ? void 0 : o.value) ? i.target.value : i),
                                            (this.jenisRKPD = l),
                                            this.dashboard.getRekapRKPD(s, l).subscribe((u) => {
                                                (this.RKPDProv = u.data.provinsi), (this.RKPDKabkot = u.data.kabkota), (this.dataSourceRKPD.data = u.data.detail);
                                                let h = ["Persiapan", "RKPD Ranwal", "RKPD Rancangan", "Musrenbang RKPD", "RKPD Akhir", "RKPD Final"];
                                                this.RKPDTotal = {
                                                    judul: "Total",
                                                    jml_1: Number(this.RKPDProv.jml_1) + Number(this.RKPDKabkot.jml_1),
                                                    jml_2: Number(this.RKPDProv.jml_2) + Number(this.RKPDKabkot.jml_2),
                                                    jml_3: Number(this.RKPDProv.jml_3) + Number(this.RKPDKabkot.jml_3),
                                                    jml_4: Number(this.RKPDProv.jml_4) + Number(this.RKPDKabkot.jml_4),
                                                    jml_5: Number(this.RKPDProv.jml_5) + Number(this.RKPDKabkot.jml_5),
                                                    jml_6: Number(this.RKPDProv.jml_6) + Number(this.RKPDKabkot.jml_6),
                                                };
                                                let w = [Number(this.RKPDProv.jml_1), Number(this.RKPDProv.jml_2), Number(this.RKPDProv.jml_3), Number(this.RKPDProv.jml_4), Number(this.RKPDProv.jml_5), Number(this.RKPDProv.jml_6)],
                                                    Da = [
                                                        Number(this.RKPDKabkot.jml_1),
                                                        Number(this.RKPDKabkot.jml_2),
                                                        Number(this.RKPDKabkot.jml_3),
                                                        Number(this.RKPDKabkot.jml_4),
                                                        Number(this.RKPDKabkot.jml_5),
                                                        Number(this.RKPDKabkot.jml_6),
                                                    ],
                                                    Ia = [
                                                        Number(this.RKPDProv.jml_1) + Number(this.RKPDKabkot.jml_1),
                                                        Number(this.RKPDProv.jml_2) + Number(this.RKPDKabkot.jml_2),
                                                        Number(this.RKPDProv.jml_3) + Number(this.RKPDKabkot.jml_3),
                                                        Number(this.RKPDProv.jml_4) + Number(this.RKPDKabkot.jml_4),
                                                        Number(this.RKPDProv.jml_5) + Number(this.RKPDKabkot.jml_5),
                                                        Number(this.RKPDProv.jml_6) + Number(this.RKPDKabkot.jml_6),
                                                    ];
                                                (this.chartOptionsProv = U("500px", h, w)), (this.chartOptionsKabkot = U("500px", h, Da)), (this.chartOptions = U("500px", h, Ia)), this.change.markForCheck();
                                            });
                                    }
                                    showRKPDData(e) {
                                        this.dashboard.getDetailRKPD(e).subscribe((i) => {
                                            this.dataSourceRKPD.data = i.data.data;
                                        });
                                    }
                                    applyFilter(e) {
                                        let i;
                                        (i = e.target.value), (this.dataSource.filter = null == i ? void 0 : i.toLowerCase());
                                    }
                                }
                                return (
                                    (a.ɵfac = function (e) {
                                        return new (e || a)(t.Y36(E), t.Y36(t.sBO));
                                    }),
                                    (a.ɵcmp = t.Xpm({
                                        type: a,
                                        selectors: [["app-dashboard-bangda"]],
                                        viewQuery: function (e, i) {
                                            if ((1 & e && (t.Gf(D.NW, 5), t.Gf(x.YE, 5)), 2 & e)) {
                                                let r;
                                                t.iGM((r = t.CRH())) && (i.matPaginator = r), t.iGM((r = t.CRH())) && (i.matSort = r);
                                            }
                                        },
                                        inputs: { chartColor: "chartColor", chartHeight: "chartHeight" },
                                        decls: 150,
                                        vars: 73,
                                        consts: [
                                            [1, "row", "ps-3", "mt-n10", "position-relative"],
                                            [1, "row", "g-0", "pb-3"],
                                            [1, "col", "col-lg-3"],
                                            [1, "card", "card-xl-stretch", "mb-xl-8", "me-5"],
                                            [1, "card-body", "pt-2"],
                                            [1, "col", "fw-bolder", "mb-1"],
                                            [1, "title", "fw-bolder"],
                                            ["name", "tahun", 1, "form-select", "form-select-solid", 3, "value", "change"],
                                            ["value", "2020"],
                                            ["value", "2021"],
                                            ["value", "2022"],
                                            ["value", "2023"],
                                            ["name", "jenisrkpd", 1, "form-select", "form-select-solid", 3, "change"],
                                            ["value", "1", "selected", ""],
                                            ["value", "3"],
                                            [1, "col", "col-lg-9", "pe-5"],
                                            [1, "card", "card-xl-stretch", "mb-xl-8"],
                                            [1, "table-responsive"],
                                            [1, "table", "table-striped", "gs-2", "gy-5", "gx-7"],
                                            [2, "height", "45px"],
                                            [1, "text-muted", "fw-bolder"],
                                            ["class", "fw-bolder", 4, "ngIf"],
                                            ["class", "text-center", 4, "ngIf"],
                                            [1, "col", "col-lg-4"],
                                            [1, "card-header", "border-0"],
                                            [1, "card-title"],
                                            [1, "mixed-widget-10-chart"],
                                            ["chartRefProv", ""],
                                            [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "stroke", "legend", "fill", "states", "tooltip", "colors", "markers", "plotOptions"],
                                            ["chartRefKabkot", ""],
                                            ["chartRef", ""],
                                            [1, "col", "col-lg-12"],
                                            [1, "card-header", "border-1", "py-0"],
                                            [1, "card-toolbar"],
                                            [1, "svg-icon", "svg-icon-1", "position-absolute", "ms-4", 3, "inlineSVG"],
                                            ["type", "text", "placeholder", "Pencarian", 1, "form-control", "form-control-solid", "w-250px", "ps-14", 3, "keyup"],
                                            [1, "card-body", "py-0"],
                                            ["mat-table", "", "matSort", "", 1, "table", "table-row-dashed", "table-row-gray-300", "align-middle", "gs-0", "gy-4", 3, "dataSource"],
                                            ["matColumnDef", "kode_ddn"],
                                            ["mat-header-cell", "", "mat-sort-header", "", "class", "text-center", 4, "matHeaderCellDef"],
                                            ["mat-cell", "", 4, "matCellDef"],
                                            ["matColumnDef", "nama_daerah"],
                                            ["matColumnDef", "pagu"],
                                            ["elseNo1", ""],
                                            ["matColumnDef", "cek_1"],
                                            ["mat-cell", "", "class", "text-center", 4, "matCellDef"],
                                            ["matColumnDef", "cek_2"],
                                            ["matColumnDef", "cek_3"],
                                            ["matColumnDef", "cek_4"],
                                            ["matColumnDef", "cek_5"],
                                            ["matColumnDef", "cek_6"],
                                            ["mat-header-row", "", "class", "fw-bolder", "style", "height: 30px !important;", 4, "matHeaderRowDef"],
                                            ["mat-row", "", "style", "height: 35px !important;", 4, "matRowDef", "matRowDefColumns"],
                                            ["showFirstLastButtons", "", 3, "pageSizeOptions"],
                                            [1, "fw-bolder"],
                                            [1, "text-center"],
                                            ["mat-header-cell", "", "mat-sort-header", "", 1, "text-center"],
                                            ["mat-cell", ""],
                                            [1, "svg-icon", "svg-icon-gray-300", "svg-icon-1", 3, "inlineSVG"],
                                            ["mat-cell", "", 1, "text-center"],
                                            ["class", "svg-icon svg-icon-danger svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-danger", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-warning svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-warning", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-success svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-success", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-primary svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-primary", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-info svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-info", "svg-icon-1", 3, "inlineSVG"],
                                            ["class", "svg-icon svg-icon-dark svg-icon-1", 3, "inlineSVG", 4, "ngIf", "ngIfElse"],
                                            [1, "svg-icon", "svg-icon-dark", "svg-icon-1", 3, "inlineSVG"],
                                            ["mat-header-row", "", 1, "fw-bolder", 2, "height", "30px !important"],
                                            ["mat-row", "", 2, "height", "35px !important"],
                                        ],
                                        template: function (e, i) {
                                            1 & e &&
                                                (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6),
                                                t._uU(7, "Tahun"),
                                                t.qZA(),
                                                t.TgZ(8, "select", 7),
                                                t.NdJ("change", function (o) {
                                                    return i.showRekapRKPD(o, i.jenisRKPD);
                                                }),
                                                t.TgZ(9, "option", 8),
                                                t._uU(10, "2020"),
                                                t.qZA(),
                                                t.TgZ(11, "option", 9),
                                                t._uU(12, "2021"),
                                                t.qZA(),
                                                t.TgZ(13, "option", 10),
                                                t._uU(14, "2022"),
                                                t.qZA(),
                                                t.TgZ(15, "option", 11),
                                                t._uU(16, "2023"),
                                                t.qZA()()(),
                                                t.TgZ(17, "div", 5)(18, "div", 6),
                                                t._uU(19, "Jenis RKPD"),
                                                t.qZA(),
                                                t.TgZ(20, "select", 12),
                                                t.NdJ("change", function (o) {
                                                    return i.showRekapRKPD(i.tahunDefault, o);
                                                }),
                                                t.TgZ(21, "option", 13),
                                                t._uU(22, "RKPD Murni"),
                                                t.qZA(),
                                                t.TgZ(23, "option", 14),
                                                t._uU(24, "RKPD Perubahan"),
                                                t.qZA()()()()()(),
                                                t.TgZ(25, "div", 15)(26, "div", 16)(27, "div", 4)(28, "div", 17)(29, "table", 18)(30, "thead", 19)(31, "tr")(32, "th", 20),
                                                t._uU(33, "\xa0"),
                                                t.qZA(),
                                                t.TgZ(34, "th", 20),
                                                t._uU(35, "Persiapan"),
                                                t.qZA(),
                                                t.TgZ(36, "th", 20),
                                                t._uU(37, "RKPD Ranwal"),
                                                t.qZA(),
                                                t.TgZ(38, "th", 20),
                                                t._uU(39, "RKPD Rancangan"),
                                                t.qZA(),
                                                t.TgZ(40, "th", 20),
                                                t._uU(41, "Musrenbang RKPD"),
                                                t.qZA(),
                                                t.TgZ(42, "th", 20),
                                                t._uU(43, "RKPD Akhir"),
                                                t.qZA(),
                                                t.TgZ(44, "th", 20),
                                                t._uU(45, "RKPD Final"),
                                                t.qZA()()(),
                                                t.TgZ(46, "tbody")(47, "tr"),
                                                t.YNc(48, Ie, 2, 1, "td", 21),
                                                t.YNc(49, we, 2, 1, "td", 22),
                                                t.YNc(50, Re, 2, 1, "td", 22),
                                                t.YNc(51, ke, 2, 1, "td", 22),
                                                t.YNc(52, Ae, 2, 1, "td", 22),
                                                t.YNc(53, Pe, 2, 1, "td", 22),
                                                t.YNc(54, Se, 2, 1, "td", 22),
                                                t.qZA(),
                                                t.TgZ(55, "tr"),
                                                t.YNc(56, Ze, 2, 1, "td", 21),
                                                t.YNc(57, Ne, 2, 1, "td", 22),
                                                t.YNc(58, Ee, 2, 1, "td", 22),
                                                t.YNc(59, Ue, 2, 1, "td", 22),
                                                t.YNc(60, Be, 2, 1, "td", 22),
                                                t.YNc(61, Le, 2, 1, "td", 22),
                                                t.YNc(62, Fe, 2, 1, "td", 22),
                                                t.qZA(),
                                                t.TgZ(63, "tr"),
                                                t.YNc(64, Oe, 2, 0, "td", 21),
                                                t.YNc(65, je, 2, 1, "td", 22),
                                                t.YNc(66, Ge, 2, 1, "td", 22),
                                                t.YNc(67, Ke, 2, 1, "td", 22),
                                                t.YNc(68, He, 2, 1, "td", 22),
                                                t.YNc(69, Qe, 2, 1, "td", 22),
                                                t.YNc(70, qe, 2, 1, "td", 22),
                                                t.qZA()()()()()()()(),
                                                t.TgZ(71, "div", 1)(72, "div", 23)(73, "div", 3)(74, "div", 24)(75, "div", 25)(76, "h4"),
                                                t._uU(77, "RKPD Provinsi"),
                                                t.qZA()()(),
                                                t.TgZ(78, "div", 4)(79, "div", 5)(80, "div", 26, 27),
                                                t._UZ(82, "apx-chart", 28),
                                                t.qZA()()()()(),
                                                t.TgZ(83, "div", 23)(84, "div", 3)(85, "div", 24)(86, "div", 25)(87, "h4"),
                                                t._uU(88, "RKPD Kabupaten/Kota"),
                                                t.qZA()()(),
                                                t.TgZ(89, "div", 4)(90, "div", 5)(91, "div", 26, 29),
                                                t._UZ(93, "apx-chart", 28),
                                                t.qZA()()()()(),
                                                t.TgZ(94, "div", 23)(95, "div", 3)(96, "div", 24)(97, "div", 25)(98, "h4"),
                                                t._uU(99, "RKPD Total"),
                                                t.qZA()()(),
                                                t.TgZ(100, "div", 4)(101, "div", 5)(102, "div", 26, 30),
                                                t._UZ(104, "apx-chart", 28),
                                                t.qZA()()()()()(),
                                                t.TgZ(105, "div", 1)(106, "div", 31)(107, "div", 16)(108, "div", 32)(109, "div", 25)(110, "h4"),
                                                t._uU(111, "Detail"),
                                                t.qZA()(),
                                                t.TgZ(112, "div", 33),
                                                t._UZ(113, "span", 34),
                                                t.TgZ(114, "input", 35),
                                                t.NdJ("keyup", function (o) {
                                                    return i.applyFilter(o);
                                                }),
                                                t.qZA()()(),
                                                t.TgZ(115, "div", 36)(116, "div", 17)(117, "table", 37),
                                                t.ynx(118, 38),
                                                t.YNc(119, Ye, 2, 0, "th", 39),
                                                t.YNc(120, Je, 2, 1, "td", 40),
                                                t.BQk(),
                                                t.ynx(121, 41),
                                                t.YNc(122, $e, 2, 0, "th", 39),
                                                t.YNc(123, ze, 2, 1, "td", 40),
                                                t.BQk(),
                                                t.ynx(124, 42),
                                                t.YNc(125, Ve, 2, 0, "th", 39),
                                                t.YNc(126, We, 3, 5, "td", 40),
                                                t.BQk(),
                                                t.YNc(127, Xe, 1, 1, "ng-template", null, 43, t.W1O),
                                                t.ynx(129, 44),
                                                t.YNc(130, ta, 2, 0, "th", 39),
                                                t.YNc(131, aa, 2, 2, "td", 45),
                                                t.BQk(),
                                                t.ynx(132, 46),
                                                t.YNc(133, ia, 2, 0, "th", 39),
                                                t.YNc(134, ra, 2, 2, "td", 45),
                                                t.BQk(),
                                                t.ynx(135, 47),
                                                t.YNc(136, oa, 2, 0, "th", 39),
                                                t.YNc(137, la, 2, 2, "td", 45),
                                                t.BQk(),
                                                t.ynx(138, 48),
                                                t.YNc(139, da, 2, 0, "th", 39),
                                                t.YNc(140, ua, 2, 2, "td", 45),
                                                t.BQk(),
                                                t.ynx(141, 49),
                                                t.YNc(142, ha, 2, 0, "th", 39),
                                                t.YNc(143, ma, 2, 2, "td", 45),
                                                t.BQk(),
                                                t.ynx(144, 50),
                                                t.YNc(145, _a, 2, 0, "th", 39),
                                                t.YNc(146, fa, 2, 2, "td", 45),
                                                t.BQk(),
                                                t.YNc(147, ba, 1, 0, "tr", 51),
                                                t.YNc(148, va, 1, 0, "tr", 52),
                                                t.qZA(),
                                                t._UZ(149, "mat-paginator", 53),
                                                t.qZA()()()()()()),
                                                2 & e &&
                                                    (t.xp6(8),
                                                    t.Q6J("value", i.tahunDefault),
                                                    t.xp6(40),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(2),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(2),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(1),
                                                    t.Q6J("ngIf", i.RKPDProv),
                                                    t.xp6(10),
                                                    t.Udp("height", i.chartHeight),
                                                    t.xp6(2),
                                                    t.Q6J("series", i.chartOptionsProv.series)("chart", i.chartOptionsProv.chart)("xaxis", i.chartOptionsProv.xaxis)("yaxis", i.chartOptionsProv.yaxis)(
                                                        "dataLabels",
                                                        i.chartOptionsProv.dataLabels
                                                    )("stroke", i.chartOptionsProv.stroke)("legend", i.chartOptionsProv.legend)("fill", i.chartOptionsProv.fill)("states", i.chartOptionsProv.states)("tooltip", i.chartOptionsProv.tooltip)(
                                                        "colors",
                                                        i.chartOptionsProv.colors
                                                    )("markers", i.chartOptionsProv.markers)("plotOptions", i.chartOptionsProv.plotOptions),
                                                    t.xp6(9),
                                                    t.Udp("height", i.chartHeight),
                                                    t.xp6(2),
                                                    t.Q6J("series", i.chartOptionsKabkot.series)("chart", i.chartOptionsKabkot.chart)("xaxis", i.chartOptionsKabkot.xaxis)("yaxis", i.chartOptionsKabkot.yaxis)(
                                                        "dataLabels",
                                                        i.chartOptionsKabkot.dataLabels
                                                    )("stroke", i.chartOptionsKabkot.stroke)("legend", i.chartOptionsKabkot.legend)("fill", i.chartOptionsKabkot.fill)("states", i.chartOptionsKabkot.states)(
                                                        "tooltip",
                                                        i.chartOptionsKabkot.tooltip
                                                    )("colors", i.chartOptionsKabkot.colors)("markers", i.chartOptionsKabkot.markers)("plotOptions", i.chartOptionsKabkot.plotOptions),
                                                    t.xp6(9),
                                                    t.Udp("height", i.chartHeight),
                                                    t.xp6(2),
                                                    t.Q6J("series", i.chartOptions.series)("chart", i.chartOptions.chart)("xaxis", i.chartOptions.xaxis)("yaxis", i.chartOptions.yaxis)("dataLabels", i.chartOptions.dataLabels)(
                                                        "stroke",
                                                        i.chartOptions.stroke
                                                    )("legend", i.chartOptions.legend)("fill", i.chartOptions.fill)("states", i.chartOptions.states)("tooltip", i.chartOptions.tooltip)("colors", i.chartOptions.colors)(
                                                        "markers",
                                                        i.chartOptions.markers
                                                    )("plotOptions", i.chartOptions.plotOptions),
                                                    t.xp6(9),
                                                    t.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen021.svg"),
                                                    t.xp6(4),
                                                    t.Q6J("dataSource", i.dataSourceRKPD),
                                                    t.xp6(30),
                                                    t.Q6J("matHeaderRowDef", i.displayedColumns),
                                                    t.xp6(1),
                                                    t.Q6J("matRowDefColumns", i.displayedColumns),
                                                    t.xp6(1),
                                                    t.Q6J("pageSizeOptions", t.DdM(72, xa)));
                                        },
                                        directives: [m.YN, m.Kr, p.O5, Z.x, S.d$, c.BZ, x.YE, c.w1, c.fO, c.ge, x.nU, c.Dz, c.ev, c.as, c.XQ, c.nj, c.Gk, D.NW],
                                        pipes: [p.JJ],
                                        styles: [
                                            "",
                                            "th.mat-header-cell[_ngcontent-%COMP%] {\n    text-align: center !important;\n    justify-content:center !important;\n}\n\n[_nghost-%COMP%]     .mat-sort-header-container {\n    display: flex;\n    justify-content: center;\n}",
                                        ],
                                    })),
                                    a
                                );
                            })(),
                        },
                    ],
                },
            ];
            let Ca = (() => {
                    class a {}
                    return (
                        (a.ɵfac = function (e) {
                            return new (e || a)();
                        }),
                        (a.ɵmod = t.oAB({ type: a })),
                        (a.ɵinj = t.cJS({ imports: [[T.Bz.forChild(ya)], T.Bz] })),
                        a
                    );
                })(),
                Ma = (() => {
                    class a {}
                    return (
                        (a.ɵfac = function (e) {
                            return new (e || a)();
                        }),
                        (a.ɵmod = t.oAB({ type: a })),
                        (a.ɵinj = t.cJS({ imports: [[p.ez, T.Bz, $.HB, z, st, lt.lN, dt.c, ct.LD, ut, ht.ot, _t, _.JF, c.p0, x.JX, D.TU, Mt, m.u5, m.UX, S.vi, H.IJ, Z.X, Ca]] })),
                        a
                    );
                })();
        },
    },
]);
