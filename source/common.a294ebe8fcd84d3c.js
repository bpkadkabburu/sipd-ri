"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [8592],
    {
        95820: (d, u, s) => {
            s.d(u, { W: () => e });
            const e = (r) => {
                var p, _;
                let a = null === (p = r.get("waktu_mulai")) || void 0 === p ? void 0 : p.value,
                    i = null === (_ = r.get("waktu_selesai")) || void 0 === _ ? void 0 : _.value;
                return a && i ? ((a = new Date(a).getTime()), (i = new Date(i).getTime()), a >= i ? { dateinvalid: !0 } : null) : null;
            };
        },
        21600: (d, u, s) => {
            function e(r) {
                const p = new Date().getTime(),
                    _ = new Date(null == r ? void 0 : r.waktu_mulai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3,
                    a = new Date(null == r ? void 0 : r.waktu_selesai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3;
                let i = "";
                return (i = p < _ ? "Belum Dimulai" : p > a ? "Selesai" : "Berjalan"), i;
            }
            s.d(u, { P: () => e });
        },
        93152: (d, u, s) => {
            function e(r, p, _) {
                return _.indexOf(r) === p;
            }
            s.d(u, { d: () => e });
        },
        32817: (d, u, s) => {
            s.d(u, { d: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlRenja}`);
                    }
                    listDataLampiranRKA(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataLampiranRKA", t);
                    }
                    listDataRincianBelanjaSubKegiatan(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataRincianBelanjaSubKegiatan", t);
                    }
                    listDataRincianSKPD(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaBelanjaSkpd", t);
                    }
                    listDataRincianPembiayaan(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaPembiayaanSkpd", t);
                    }
                    listDataRincianPendapatan(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaPendapatanSkpd", t);
                    }
                    listDataRincianRekapBelanjaSKPD(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaRekapitulasiBelanjaSkpd", t);
                    }
                    getDaerah(t) {
                        return this.http.get(`${e.N.apiUrlMaster}/daerah/view/${t}`);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        87292: (d, u, s) => {
            s.d(u, { q: () => _ });
            var e = s(69808),
                r = s(51062),
                p = s(5e3);
            let _ = (() => {
                class a {}
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)();
                    }),
                    (a.ɵmod = p.oAB({ type: a })),
                    (a.ɵinj = p.cJS({ imports: [[e.ez, r.aw], r.aw] })),
                    a
                );
            })();
        },
        63813: (d, u, s) => {
            s.d(u, { c: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list() {
                        return this.http.get(this.API_URL + "/landing_page_menu_approval/all");
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/landing_page_menu_approval/add", t);
                    }
                    approve(t) {
                        return this.http.post(this.API_URL + "/landing_page_menu_approval/approve", t);
                    }
                    view(t) {
                        return this.http.get(`${this.API_URL}/landing_page_menu_approval/view/${t}`);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        98380: (d, u, s) => {
            s.d(u, { x: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/level_user/list`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/level_user/add", t);
                    }
                    view(t) {
                        return this.http.get(`${this.API_URL}/level_user/view/${t}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/level_user/update", t);
                    }
                    detail(t) {
                        return this.http.get(this.API_URL + "/menu/all");
                    }
                    groupMenuList(t) {
                        return this.http.post(this.API_URL + "/ref_group_menu/list", t);
                    }
                    groupMenuSetMenu(t) {
                        return this.http.post(this.API_URL + "/ref_group_menu/set_menu", t);
                    }
                    groupMenuSetAction(t) {
                        return this.http.post(this.API_URL + "/ref_group_menu/set_action", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        21075: (d, u, s) => {
            s.d(u, { $: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlLog}`);
                    }
                    list(t) {
                        return this.http.get(this.API_URL + "/log_" + t + "/list");
                    }
                    addLoginLog(t) {
                        return this.http.post(`${this.API_URL}/log_login/add`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        11335: (d, u, s) => {
            s.d(u, { I: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/bidang_urusan_org/list`, t);
                    }
                    findByIdUnit(t) {
                        return this.http.post(`${this.API_URL}/bidang_urusan_org/find_by_id_unit`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/bidang_urusan_org/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/bidang_urusan_org/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/bidang_urusan_org/update", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/bidang_urusan_org/delete`, t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        63782: (d, u, s) => {
            s.d(u, { i: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/bidang_urusan_skpd/list`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/bidang_urusan_skpd/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/bidang_urusan_skpd/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/bidang_urusan_skpd/update", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/bidang_urusan_skpd/delete`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/bidang_urusan_skpd/find`, t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        38334: (d, u, s) => {
            s.d(u, { E: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    listProvinsi() {
                        return this.http.get(this.API_URL + "/provinsi/list");
                    }
                    listKabkot(t) {
                        return this.http.get(this.API_URL + "/kabkot/list/" + t);
                    }
                    listAllKabkot() {
                        return this.http.get(this.API_URL + "/kabkot/listAll");
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/daerah/list", t);
                    }
                    all() {
                        return this.http.get(this.API_URL + "/daerah/all");
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/daerah/add", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/daerah/delete`, t);
                    }
                    view(t) {
                        return this.http.get(this.API_URL + "/daerah/view/" + t);
                    }
                    daerahLokasi(t) {
                        return this.http.post(`${this.API_URL}/daerah/lokasi`, t);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/daerah/update", t);
                    }
                    getKodeProvinsiByDaerah(t) {
                        return this.http.get(this.API_URL + "/daerah/kode_prop/" + t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                    findKabkota(t) {
                        return this.http.post(`${this.API_URL}/kabkot/findlist`, t);
                    }
                    searchProvinsi(t) {
                        return this.http.post(`${this.API_URL}/daerah/search_provinsi`, t);
                    }
                    searchKotkab(t) {
                        return this.http.post(`${this.API_URL}/daerah/search_kotkab`, t);
                    }
                    listProv() {
                        return this.http.get(`${e.N.apiUrlMaster}/provinsi/listpusat`);
                    }
                    findlistProv(t) {
                        return this.http.post(`${e.N.apiUrlMaster}/provinsi/findlistpusat`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        81570: (d, u, s) => {
            s.d(u, { B: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.apiUrlMaster = `${e.N.apiUrlMaster}`), (this.apiUrlMedia = `${e.N.apiUrlMedia}`);
                    }
                    listTahapan(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_tahapan/list`, t);
                    }
                    viewTahapan(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_tahapan/view`, t);
                    }
                    addTahapan(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_tahapan/add`, t);
                    }
                    updateTahapan(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_tahapan/update`, t);
                    }
                    deleteTahapan(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_tahapan/delete`, t);
                    }
                    listDokumen(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_perencanaan/list`, t);
                    }
                    viewDokumen(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_perencanaan/view`, t);
                    }
                    addDokumen(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_perencanaan/add`, t);
                    }
                    updateDokumen(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_perencanaan/update`, t);
                    }
                    deleteDokumen(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_perencanaan/delete`, t);
                    }
                    dashboard(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_tahapan/dashboard`, t);
                    }
                    listDokumenDashboard(t) {
                        return this.http.post(`${this.apiUrlMaster}/dok_perencanaan/list_dokumen`, t);
                    }
                    listUploadDashboard(t) {
                        return this.http.post(`${this.apiUrlMedia}/dok_perencanaan_upload/list_upload`, t);
                    }
                    cekDokumen(t) {
                        return this.http.post(`${this.apiUrlMedia}/dok_perencanaan_upload/cek_file`, t);
                    }
                    upload(t) {
                        return this.http.post(`${this.apiUrlMedia}/dok_perencanaan_upload/upload`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        54199: (d, u, s) => {
            s.d(u, { k: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/fungsi/list`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/fungsi/add", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/fungsi/delete`, t);
                    }
                    view(t, n) {
                        return this.http.get(`${this.API_URL}/fungsi/view/${t}/${n}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/fungsi/update", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                    search(t) {
                        return this.http.post(`${this.API_URL}/fungsi/search`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        62360: (d, u, s) => {
            s.d(u, { e: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list() {
                        return this.http.get(this.API_URL + "/jenis_usulan/list");
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/jenis_usulan/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/jenis_usulan/add", t);
                    }
                    view(t) {
                        return this.http.get(`${this.API_URL}/jenis_usulan/view/${t}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/jenis_usulan/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/jenis_usulan/delete", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        71831: (d, u, s) => {
            s.d(u, { C: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/kel_standar_harga/list`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/kel_standar_harga/add", t);
                    }
                    view(t) {
                        return this.http.get(`${this.API_URL}/kel_standar_harga/view/${t}`);
                    }
                    viewData(t) {
                        return this.http.post(this.API_URL + "/kel_standar_harga/viewData", t);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/kel_standar_harga/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/kel_standar_harga/delete", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        24148: (d, u, s) => {
            s.d(u, { P: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/label_giat/list`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/label_giat/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/label_giat/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/label_giat/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/label_giat/update", t);
                    }
                    lock(t) {
                        return this.http.post(`${this.API_URL}/label_giat/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/label_giat/delete", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        11099: (d, u, s) => {
            s.d(u, { c: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/label_kokab/list`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/label_kokab/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/label_kokab/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/label_kokab/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/label_kokab/update", t);
                    }
                    lock(t) {
                        return this.http.post(`${this.API_URL}/label_kokab/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/label_kokab/delete", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        5151: (d, u, s) => {
            s.d(u, { A: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/label_prov/list`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/label_prov/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/label_prov/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/label_prov/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/label_prov/update", t);
                    }
                    lock(t) {
                        return this.http.post(`${this.API_URL}/label_prov/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/label_prov/delete", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        27847: (d, u, s) => {
            s.d(u, { Y: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/label_pusat/list`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/label_pusat/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/label_pusat/add", t);
                    }
                    view(t) {
                        return this.http.get(this.API_URL + "/label_pusat/view/" + t);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/label_pusat/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/label_pusat/delete", t);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        11819: (d, u, s) => {
            s.d(u, { q: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/lokasi/list`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/lokasi/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/lokasi/add", t);
                    }
                    view(t, n) {
                        return this.http.get(`${this.API_URL}/lokasi/view/${t}/${n}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/lokasi/update", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/lokasi/delete`, t);
                    }
                    listKecamatan(t) {
                        return this.http.get(`${this.API_URL}/kecamatan/daerah/${t}`);
                    }
                    listKelurahan(t) {
                        return this.http.get(`${this.API_URL}/kelurahan/list_camat/${t}`);
                    }
                    roleAccess(t) {
                        return this.http.post(`${e.N.apiUrlMaster}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        58616: (d, u, s) => {
            s.d(u, { w: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/skpd/addNew`, t);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/skpd/update_skpd`, t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/skpd/view/${t}/${n}/${o}`);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        85085: (d, u, s) => {
            s.d(u, { J: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/sub_fungsi/list`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/sub_fungsi/add", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/sub_fungsi/delete`, t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/sub_fungsi/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/sub_fungsi/update", t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/sub_fungsi/find`, t);
                    }
                    search(t) {
                        return this.http.post(`${this.API_URL}/sub_fungsi/search`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        4696: (d, u, s) => {
            s.d(u, { b: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/list`, t);
                    }
                    listDataTable(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/list_table`, t);
                    }
                    listSkpd(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/list_skpd`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/find`, t);
                    }
                    find_by_id_sub_giat_list_all(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/find_by_id_sub_giat_list_all`, t);
                    }
                    findByIdBidangUrusan(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/find_by_id_bidang_urusan`, t);
                    }
                    search(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/search`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/sub_giat/add", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/delete`, t);
                    }
                    view(t, n) {
                        return this.http.get(`${this.API_URL}/sub_giat/view/${t}/${n}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/sub_giat/update", t);
                    }
                    findByIdSubGiatList(t) {
                        return this.http.post(this.API_URL + "/sub_giat/find_by_id_sub_giat_list", t);
                    }
                    listByTahun(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/list_by_tahun`, t);
                    }
                    findByTahunAndSKPD(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/find_by_tahun_and_skpd`, t);
                    }
                    findByDaerahAndTahun(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/find_by_daerah_and_tahun`, t);
                    }
                    findByTahunDaerahUnit(t) {
                        return this.http.get(`${this.API_URL}/sub_giat/find_by_tahun_daerah_unit`, { params: t });
                    }
                    findByTahunDaerahUnitPost(t) {
                        return this.http.post(`${this.API_URL}/sub_giat/find_sub_giat_by_tahun_daerah_unit`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        34218: (d, u, s) => {
            s.d(u, { _: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list() {
                        return this.http.get(this.API_URL + "/sub_skpd/list");
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/sub_skpd/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/sub_skpd/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/sub_skpd/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/sub_skpd/delete", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        57889: (d, u, s) => {
            s.d(u, { W: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/sumber_dana/list`, t);
                    }
                    listData(t) {
                        return this.http.post(`${this.API_URL}/sumber_dana/listNew`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/sumber_dana/find`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/sumber_dana/add", t);
                    }
                    view(t, n) {
                        return this.http.get(`${this.API_URL}/sumber_dana/view/${t}/${n}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/sumber_dana/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/sumber_dana/delete", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        71480: (d, u, s) => {
            s.d(u, { U: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/nasional_bidang_urusan_skpd/list`, t);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/nasional_bidang_urusan_skpd/add`, t);
                    }
                    view(t) {
                        return this.http.get(`${this.API_URL}/nasional_bidang_urusan_skpd/view/${t}`);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/nasional_bidang_urusan_skpd/update`, t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/nasional_bidang_urusan_skpd/delete`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/nasional_bidang_urusan_skpd/find_bidang_urusan_skpd`, t);
                    }
                    roleAccess(t) {
                        return this.http.post(`${e.N.apiUrlMaster}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        64706: (d, u, s) => {
            s.d(u, { D: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/nasional_urusan/list`, t);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/nasional_urusan/add`, t);
                    }
                    view(t) {
                        return this.http.get(`${this.API_URL}/nasional_urusan/view/${t}`);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/nasional_urusan/update`, t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/nasional_urusan/delete`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/nasional_urusan/find`, t);
                    }
                    roleAccess(t) {
                        return this.http.post(`${e.N.apiUrlMaster}/ref_group_menu/check_access`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        40947: (d, u, s) => {
            s.d(u, { t: () => a });
            var e = s(5e3),
                r = s(44619),
                p = s(69808);
            function _(i, t) {
                if ((1 & i && (e.TgZ(0, "span"), e._uU(1), e.ALo(2, "date"), e._UZ(3, "br"), e.qZA()), 2 & i)) {
                    const n = t.$implicit;
                    e.xp6(1), e.AsE(" ", e.xi3(2, 2, n.createdAt, "dd/MM/yyyy"), " - ", n.note, " ");
                }
            }
            let a = (() => {
                class i {
                    constructor() {
                        (this.selectedSpp = null), (this.title = "");
                    }
                    ngOnInit() {}
                }
                return (
                    (i.ɵfac = function (n) {
                        return new (n || i)();
                    }),
                    (i.ɵcmp = e.Xpm({
                        type: i,
                        selectors: [["catatan-revisi"]],
                        inputs: { selectedSpp: "selectedSpp", title: "title" },
                        decls: 10,
                        vars: 3,
                        consts: [
                            [1, "notice", "d-flex", "bg-light-warning", "rounded", "border-warning", "border", "border-dashed", "p-4", "mb-4"],
                            [1, "svg-icon", "svg-icon-2tx", "svg-icon-warning", "me-4", 3, "inlineSVG"],
                            [1, "d-flex", "flex-stack", "flex-grow-1"],
                            [1, "fw-bold"],
                            [1, "text-gray-800", "fw-bolder"],
                            [1, "text-gray-600"],
                            [4, "ngFor", "ngForOf"],
                        ],
                        template: function (n, o) {
                            1 & n &&
                                (e.TgZ(0, "div", 0),
                                e._UZ(1, "span", 1),
                                e.TgZ(2, "div", 2)(3, "div", 3)(4, "h4", 4),
                                e._uU(5),
                                e.qZA(),
                                e.TgZ(6, "div", 5),
                                e._uU(7, " Catatan :"),
                                e._UZ(8, "br"),
                                e.YNc(9, _, 4, 5, "span", 6),
                                e.qZA()()()()),
                                2 & n && (e.xp6(1), e.Q6J("inlineSVG", "./assets/media/icons/duotune/general/gen044.svg"), e.xp6(4), e.Oqu(o.title), e.xp6(4), e.Q6J("ngForOf", o.selectedSpp.notes));
                        },
                        directives: [r.d$, p.sg],
                        pipes: [p.uU],
                        styles: [""],
                    })),
                    i
                );
            })();
        },
        82148: (d, u, s) => {
            s.d(u, { z: () => _ });
            var e = s(5e3),
                r = s(69808);
            function p(a, i) {
                if ((1 & a && (e.TgZ(0, "div", 1)(1, "label"), e._uU(2), e.qZA(), e.TgZ(3, "div")(4, "span", 2), e._uU(5), e.qZA()()()), 2 & a)) {
                    const t = i.$implicit,
                        n = e.oxw();
                    e.xp6(1),
                        e.Gre("col-lg-", n.ratio12[0], " fw-bold text-muted"),
                        e.xp6(1),
                        e.Oqu(t.key),
                        e.xp6(1),
                        e.Gre("col-lg-", n.ratio12[1], ""),
                        e.xp6(2),
                        e.hij(" ", "money" === t.formatter ? n.moneyFormat(t.value) : "dateTime" === t.formatter ? n.dateTimeFormat(t.value) : "date" === t.formatter ? n.dateFormat(t.value) : t.value, " ");
                }
            }
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.datePipe = t), (this.keyVals = []), (this.ratio12 = [4, 8]);
                    }
                    ngOnInit() {}
                    moneyFormat(t) {
                        return parseFloat(t.toString())
                            .toFixed(2)
                            .replace(".", ",")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    }
                    dateFormat(t) {
                        var n;
                        return null == t ? "" : null !== (n = this.datePipe.transform(new Date(t), "yyyy-MM-dd", "+0700")) && void 0 !== n ? n : "";
                    }
                    dateTimeFormat(t) {
                        var n;
                        return null == t ? "" : null !== (n = this.datePipe.transform(new Date(t), "yyyy-MM-dd HH:mm:ss", "+0700")) && void 0 !== n ? n : "";
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(e.Y36(r.uU));
                    }),
                    (a.ɵcmp = e.Xpm({
                        type: a,
                        selectors: [["key-value-group"]],
                        inputs: { keyVals: "keyVals", ratio12: "ratio12" },
                        decls: 2,
                        vars: 1,
                        consts: [
                            ["class", "row mb-7", 4, "ngFor", "ngForOf"],
                            [1, "row", "mb-7"],
                            [1, "fw-bolder", "fs-6", "text-dark"],
                        ],
                        template: function (t, n) {
                            1 & t && (e.TgZ(0, "div"), e.YNc(1, p, 6, 8, "div", 0), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngForOf", n.keyVals));
                        },
                        directives: [r.sg],
                        styles: [""],
                    })),
                    a
                );
            })();
        },
        27404: (d, u, s) => {
            s.d(u, { j: () => a });
            var e = s(5e3),
                r = s(64942),
                p = s(39450),
                _ = s(36226);
            let a = (() => {
                class i {
                    constructor(n, o, h) {
                        (this.konfigurasiService = n), (this.waktuService = o), (this.jadwalService = h), (this.waktu_server_sekarang = 0);
                    }
                    ngOnInit() {
                        this.loadData();
                    }
                    loadData() {
                        (this.isLoading = !0),
                            (this.dataSub = this.jadwalService.listTahapan(this.konfigurasiService.getTahun()).subscribe({
                                next: (n) => {
                                    (this.listTahapan = n.data.reduce((h, l) => ((h[l.id_tahap] = l.nama_tahap), h), {})), this.listJadwal();
                                },
                                error: (n) => {
                                    this.isLoading = !1;
                                },
                            }));
                    }
                    listJadwal() {
                        this.isLoading = !0;
                        const n = new FormData();
                        n.append("id_daerah", this.konfigurasiService.getIdDaerah()),
                            n.append("tahun", this.konfigurasiService.getTahun()),
                            (this.jadwalSub = this.jadwalService.list(n).subscribe({
                                next: (o) => {
                                    const h = o.data,
                                        l = o.data.filter((v) => 0 === v.is_locked);
                                    h.length > 0
                                        ? l.length > 0
                                            ? ((this.displayTahapan = `${this.listTahapan[l[0].id_tahap]} (${l[0].nama_sub_tahap})`),
                                              (this.startCountdown = new Date(l[0].waktu_mulai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                              (this.endCountdown = new Date(l[0].waktu_selesai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                              this.getDataWaktuServer(),
                                              (this.isLoading = !1))
                                            : ((this.displayTahapan = `${this.listTahapan[h[0].id_tahap]} (${h[0].nama_sub_tahap})`), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1))
                                        : ((this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1));
                                },
                                error: (o) => {
                                    this.isLoading = !1;
                                },
                            }));
                    }
                    getDataWaktuServer() {
                        const n = new FormData();
                        this.waktuSub = this.waktuService.getWaktuServer(n).subscribe({
                            next: (o) => {
                                (this.waktu_server_sekarang = Number(o.data)), this.countDownTime();
                            },
                            error: (o) => {
                                this.isLoading = !1;
                            },
                        });
                    }
                    countDownTime() {
                        if (Number(this.waktu_server_sekarang) >= this.startCountdown) {
                            var n = Number(this.waktu_server_sekarang);
                            let o = setInterval(() => {
                                var h = this.endCountdown - n,
                                    l = Math.floor(h / 864e5),
                                    v = Math.floor((h % 864e5) / 36e5),
                                    g = Math.floor((h % 36e5) / 6e4),
                                    L = Math.floor((h % 6e4) / 1e3);
                                (this.displayCountdown = l + " Hari " + v + " Jam " + g + " Menit " + L + " Detik "), (n += 1e3), h < 0 && (clearInterval(o), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"));
                            }, 1e3);
                        } else this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik";
                    }
                }
                return (
                    (i.ɵfac = function (n) {
                        return new (n || i)(e.Y36(r.W), e.Y36(p.A), e.Y36(_.K));
                    }),
                    (i.ɵcmp = e.Xpm({
                        type: i,
                        selectors: [["app-waktu-penganggaran"]],
                        decls: 6,
                        vars: 2,
                        consts: [
                            [1, "card", "card-sm", "my-5"],
                            [1, "text-center", "mt-2", "py-4"],
                        ],
                        template: function (n, o) {
                            1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h4"), e._uU(3), e.qZA(), e.TgZ(4, "h5"), e._uU(5), e.qZA()()()), 2 & n && (e.xp6(3), e.Oqu(o.displayTahapan), e.xp6(2), e.Oqu(o.displayCountdown));
                        },
                        styles: [""],
                    })),
                    i
                );
            })();
        },
        28926: (d, u, s) => {
            s.d(u, { u: () => p });
            var e = s(69808),
                r = s(5e3);
            let p = (() => {
                class _ {}
                return (
                    (_.ɵfac = function (i) {
                        return new (i || _)();
                    }),
                    (_.ɵmod = r.oAB({ type: _ })),
                    (_.ɵinj = r.cJS({ imports: [[e.ez]] })),
                    _
                );
            })();
        },
        75310: (d, u, s) => {
            s.d(u, { q: () => a });
            var e = s(5e3),
                r = s(64942),
                p = s(39450),
                _ = s(36226);
            let a = (() => {
                class i {
                    constructor(n, o, h) {
                        (this.konfigurasiService = n), (this.waktuService = o), (this.jadwalService = h), (this.waktu_server_sekarang = 0);
                    }
                    ngOnInit() {
                        this.loadData();
                    }
                    ngOnDestroy() {
                        var n, o;
                        null === (n = this.dataSub) || void 0 === n || n.unsubscribe(), null === (o = this.jadwalSub) || void 0 === o || o.unsubscribe();
                    }
                    loadData() {
                        (this.isLoading = !0),
                            (this.dataSub = this.jadwalService.listTahapan(String(this.konfigurasiService.getTahun())).subscribe({
                                next: (n) => {
                                    (this.listTahapan = n.data.reduce((h, l) => ((h[l.id_tahap] = l.nama_tahap), h), {})), this.listJadwal();
                                },
                                error: (n) => {
                                    this.isLoading = !1;
                                },
                            }));
                    }
                    listJadwal() {
                        this.isLoading = !0;
                        const n = new FormData();
                        n.append("id_daerah", this.konfigurasiService.getIdDaerah()),
                            n.append("tahun", this.konfigurasiService.getTahun()),
                            (this.jadwalSub = this.jadwalService.list(n).subscribe({
                                next: (o) => {
                                    const h = o.data,
                                        l = o.data.filter((v) => 0 === v.is_locked);
                                    h.length > 0
                                        ? l.length > 0
                                            ? ((this.displayTahapan = this.listTahapan[l[0].id_tahap]),
                                              (this.startCountdown = new Date(l[0].waktu_mulai).getTime() + (60 * new Date().getTimezoneOffset() * 1e3 - 36e5)),
                                              (this.endCountdown = new Date(l[0].waktu_selesai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                              this.getDataWaktuServer(),
                                              (this.isLoading = !1))
                                            : ((this.displayTahapan = this.listTahapan[h[0].id_tahap]), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1))
                                        : ((this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1));
                                },
                                error: (o) => {
                                    this.isLoading = !1;
                                },
                            }));
                    }
                    getDataWaktuServer() {
                        const n = new FormData();
                        this.waktuSub = this.waktuService.getWaktuServer(n).subscribe({
                            next: (o) => {
                                (this.waktu_server_sekarang = Number(o.data)), this.countDownTime();
                            },
                            error: (o) => {
                                this.isLoading = !1;
                            },
                        });
                    }
                    countDownTime() {
                        if (Number(this.waktu_server_sekarang) > this.startCountdown) {
                            var n = Number(this.waktu_server_sekarang);
                            let o = setInterval(() => {
                                var h = this.endCountdown - n,
                                    l = Math.floor(h / 864e5),
                                    v = Math.floor((h % 864e5) / 36e5),
                                    g = Math.floor((h % 36e5) / 6e4),
                                    L = Math.floor((h % 6e4) / 1e3);
                                (this.displayCountdown = `${l} Hari ${v} Jam ${g} Menit ${L} Detik `), (n += 1e3), h < 0 && (clearInterval(o), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"));
                            }, 1e3);
                        } else this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik";
                    }
                }
                return (
                    (i.ɵfac = function (n) {
                        return new (n || i)(e.Y36(r.W), e.Y36(p.A), e.Y36(_.K));
                    }),
                    (i.ɵcmp = e.Xpm({
                        type: i,
                        selectors: [["app-waktu"]],
                        decls: 6,
                        vars: 2,
                        consts: [
                            [1, "card", "card-sm", "my-5"],
                            [1, "text-center", "mt-2", "py-4"],
                        ],
                        template: function (n, o) {
                            1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h4"), e._uU(3), e.qZA(), e.TgZ(4, "h5"), e._uU(5), e.qZA()()()), 2 & n && (e.xp6(3), e.Oqu(o.displayTahapan), e.xp6(2), e.Oqu(o.displayCountdown));
                        },
                        styles: [""],
                    })),
                    i
                );
            })();
        },
        8776: (d, u, s) => {
            s.d(u, { m: () => p });
            var e = s(69808),
                r = s(5e3);
            let p = (() => {
                class _ {}
                return (
                    (_.ɵfac = function (i) {
                        return new (i || _)();
                    }),
                    (_.ɵmod = r.oAB({ type: _ })),
                    (_.ɵinj = r.cJS({ imports: [[e.ez]] })),
                    _
                );
            })();
        },
        46700: (d, u, s) => {
            s.d(u, { m: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlRenja}`);
                    }
                    getJenisSetPagu(t) {
                        return this.http.post(this.API_URL + "/setup_anggaran/get_jenis_setup_pagu", t);
                    }
                    getPengaturanSipd(t) {
                        return this.http.post(this.API_URL + "/setup_anggaran/get_pengaturan_sipd", t);
                    }
                    updatePengaturanSipd(t) {
                        return this.http.post(this.API_URL + "/setup_anggaran/update_pengaturan_sipd", t);
                    }
                    addPengaturanSipd(t) {
                        return this.http.post(this.API_URL + "/setup_anggaran/add_pengaturan_sipd", t);
                    }
                    updateJenisSetPagu(t) {
                        return this.http.post(this.API_URL + "/setup_anggaran/update_jenis_set_pagu", t);
                    }
                    deleteJenisSetPagu(t) {
                        return this.http.post(this.API_URL + "/setup_anggaran/delete_set_pagu", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        65414: (d, u, s) => {
            s.d(u, { X: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlRenja}`);
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/setup_unit/list", t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/setup_unit/add", t);
                    }
                    view(t, n) {
                        return this.http.post(this.API_URL + `/setup_unit/view/${t}`, n);
                    }
                    findByIdUnit(t) {
                        return this.http.post(this.API_URL + "/setup_unit/find_by_id_unit", t);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/setup_unit/update", t);
                    }
                    getPaguIndikatif(t) {
                        return this.http.post(this.API_URL + "/setup_unit/pagu_indikatif", t);
                    }
                    getPaguValidasi(t) {
                        return this.http.get(this.API_URL + "/setup_unit/pagu_validasi", { params: t });
                    }
                    updatePaguIndikatif(t) {
                        return this.http.post(this.API_URL + "/setup_unit/update_pagu_indikatif", t);
                    }
                    updateKunciTambahGiatDaerah(t) {
                        return this.http.post(this.API_URL + "/setup_unit/update_kunci_tambah_giat_daerah", t);
                    }
                    updateKunciTambahGiatUnit(t) {
                        return this.http.post(this.API_URL + "/setup_unit/update_kunci_tambah_giat_unit", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        63887: (d, u, s) => {
            s.d(u, { O: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        this.http = t;
                    }
                    list(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/list`, t);
                    }
                    view(t, n) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/view/${t}`, n);
                    }
                    viewData(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/viewData`, t);
                    }
                    add(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/add`, t);
                    }
                    update(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/update`, t);
                    }
                    delete(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/delete`, t);
                    }
                    lock(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/lock`, t);
                    }
                    listJadwalRpjmRpd(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/rpjm_jadwal/listAllJadwal`, t);
                    }
                    listTahapanRenja() {
                        return this.http.get(`${e.N.apiUrlMaster}/tahapan/list/plan`);
                    }
                    listSubTahap() {
                        return this.http.get(`${e.N.apiUrlMaster}/sub_rkpd/listall`);
                    }
                    listRkpdMurni(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/rkpd_murni`, t);
                    }
                    listTahapanAnggaran() {
                        return this.http.get(`${e.N.apiUrlMaster}/tahapan/list/budget`);
                    }
                    listAnggaran(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/anggaran_jadwal/list`, t);
                    }
                    listApbdMurni(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/anggaran_jadwal/apbd_murni`, t);
                    }
                    listSubTahapDinamis(t, n) {
                        return this.http.get(`${e.N.apiUrlMaster}/sub_rkpd/sub_tahap/${t}/${n}`);
                    }
                    cekAkses(t) {
                        return this.http.post(`${e.N.apiUrlMaster}/ref_group_menu/check_access`, t);
                    }
                    cekJadwalAktif(t, n = "0") {
                        return this.http.post("0" == n ? `${e.N.apiUrlJadwal}/renja_jadwal/cek_aktif` : `${e.N.apiUrlJadwal}/anggaran_jadwal/cek_aktif`, t);
                    }
                    cekJadwalAktifAll(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/cek_aktif_renja_anggaran`, t);
                    }
                    cekSubTahap(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/cek_sub_tahap`, t);
                    }
                    sinkronRpjmd(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/sinkron_rpjmd`, t);
                    }
                    ubahKomparasi(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/ubah_komparasi`, t);
                    }
                    cekCopyData(t) {
                        return this.http.post(`${e.N.apiUrlJadwal}/renja_jadwal/cek_copy_data`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        6425: (d, u, s) => {
            s.d(u, { d: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlRenja}`);
                    }
                    listLaporan(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listLaporan", t);
                    }
                    uploadLaporan(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/uploadLaporan", t);
                    }
                    uploadLaporanSemuaSkpd(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/uploadLaporanSemuaSkpd", t);
                    }
                    cetakAllOpd(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/cetakAllOpd", t);
                    }
                    listDataLampiran(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataLampiran", t);
                    }
                    listDataLampiranLaporan(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataLampiranLaporan", t);
                    }
                    listDataLampiranSemuaSkpd(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataLampiranSemuaSkpd", t);
                    }
                    listDataLampiranPerSkpd(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataLampiranPerSkpd", t);
                    }
                    listDataLampiranRKA(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataLampiranRKA", t);
                    }
                    listDataRincianBelanjaSubKegiatan(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listDataRincianBelanjaSubKegiatan", t);
                    }
                    listDataRincianSKPD(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaBelanjaSkpd", t);
                    }
                    listDataRincianPembiayaan(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaPembiayaanSkpd", t);
                    }
                    listDataRincianPendapatan(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaPendapatanSkpd", t);
                    }
                    listDataRincianRekapBelanjaSKPD(t) {
                        return this.http.post(this.API_URL + "/laporan/rkaRekapitulasiBelanjaSkpd", t);
                    }
                    listDataLampiranKuaPpas(t) {
                        return this.http.post(this.API_URL + "/kua_ppas/listDataLampiran", t);
                    }
                    getDaerah(t) {
                        return this.http.get(`${e.N.apiUrlMaster}/daerah/view/${t}`);
                    }
                    getNamaLaporan(t, n, o) {
                        return this.http.get(this.API_URL + `/renja_laporan/nama_file/${t}/${n}/${o}`);
                    }
                    getDataSudahCetak(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/listLaporanSudahCetak", t);
                    }
                    ListKuaPpasPerJadwalAnggaran(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/ListKuaPpasPerJadwalAnggaran", t);
                    }
                    cekCetakLaporan(t) {
                        return this.http.post(this.API_URL + "/renja_laporan/cekLaporan", t);
                    }
                    viewLaporan(t) {
                        return this.http.get(this.API_URL + `/renja_laporan/view_file/${t}`);
                    }
                    copyDataRenjaPerSubTahap(t) {
                        return this.http.post(this.API_URL + "/sinkron/copydatarenjapersubtahap", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        77135: (d, u, s) => {
            s.d(u, { H: () => i });
            var e = s(5e3),
                r = s(64942),
                p = s(4521),
                _ = s(39450),
                a = s(63887);
            let i = (() => {
                class t {
                    constructor(o, h, l, v) {
                        (this.konfigurasiService = o), (this.router = h), (this.waktuService = l), (this.jadwalService = v), (this.waktu_server_sekarang = 0);
                    }
                    ngOnInit() {
                        (this.activeFullUrl = "/" + this.router.url.split("/")[1] + "/" + this.router.url.split("/")[2]), this.loadData();
                    }
                    ngOnDestroy() {
                        var o, h;
                        null === (o = this.dataSub) || void 0 === o || o.unsubscribe(), null === (h = this.jadwalSub) || void 0 === h || h.unsubscribe();
                    }
                    loadData() {
                        this.isLoading = !0;
                        let o = this.jadwalService.listTahapanRenja();
                        "/penganggaran/anggaran" == this.activeFullUrl && (o = this.jadwalService.listTahapanAnggaran()),
                            (this.dataSub =
                                null == o
                                    ? void 0
                                    : o.subscribe({
                                          next: (h) => {
                                              (this.listTahapan = h.data.reduce((v, g) => ((v[g.id_tahap] = g.nama_tahap), v), {})), this.listJadwal();
                                          },
                                          error: (h) => {
                                              this.isLoading = !1;
                                          },
                                      }));
                    }
                    listJadwal() {
                        this.isLoading = !0;
                        const o = new FormData();
                        o.append("id_daerah", this.konfigurasiService.getIdDaerah()), o.append("tahun", this.konfigurasiService.getTahun());
                        let h = this.jadwalService.list(o);
                        "/penganggaran/anggaran" == this.activeFullUrl && (h = this.jadwalService.listAnggaran(o)),
                            (this.jadwalSub =
                                null == h
                                    ? void 0
                                    : h.subscribe({
                                          next: (l) => {
                                              const v = l.data,
                                                  g = l.data.filter((L) => 0 === L.is_locked);
                                              v.length > 0
                                                  ? g.length > 0
                                                      ? ((this.displayTahapan = `${this.listTahapan[g[0].id_tahap]} (${g[0].nama_sub_tahap})`),
                                                        (this.startCountdown = new Date(g[0].waktu_mulai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                                        (this.endCountdown = new Date(g[0].waktu_selesai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                                        this.getDataWaktuServer(),
                                                        (this.isLoading = !1))
                                                      : ((this.displayTahapan = `${this.listTahapan[v[0].id_tahap]} (${v[0].nama_sub_tahap})`), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1))
                                                  : ((this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1));
                                          },
                                          error: (l) => {
                                              this.isLoading = !1;
                                          },
                                      }));
                    }
                    getDataWaktuServer() {
                        const o = new FormData();
                        this.waktuSub = this.waktuService.getWaktuServer(o).subscribe({
                            next: (h) => {
                                (this.waktu_server_sekarang = Number(h.data)), this.countDownTime();
                            },
                            error: (h) => {
                                this.isLoading = !1;
                            },
                        });
                    }
                    countDownTime() {
                        if (Number(this.waktu_server_sekarang) > this.startCountdown) {
                            var o = Number(this.waktu_server_sekarang);
                            let h = setInterval(() => {
                                var l = this.endCountdown - o,
                                    v = Math.floor(l / 864e5),
                                    g = Math.floor((l % 864e5) / 36e5),
                                    L = Math.floor((l % 36e5) / 6e4),
                                    A = Math.floor((l % 6e4) / 1e3);
                                (this.displayCountdown = `${v} Hari ${g} Jam ${L} Menit ${A} Detik `), (o += 1e3), l < 0 && (clearInterval(h), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"));
                            }, 1e3);
                        } else this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik";
                    }
                }
                return (
                    (t.ɵfac = function (o) {
                        return new (o || t)(e.Y36(r.W), e.Y36(p.F0), e.Y36(_.A), e.Y36(a.O));
                    }),
                    (t.ɵcmp = e.Xpm({
                        type: t,
                        selectors: [["app-waktu-renja"]],
                        decls: 6,
                        vars: 2,
                        consts: [
                            [1, "card", "card-sm", "my-5"],
                            [1, "text-center", "mt-2", "py-4"],
                        ],
                        template: function (o, h) {
                            1 & o && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h4"), e._uU(3), e.qZA(), e.TgZ(4, "h5"), e._uU(5), e.qZA()()()), 2 & o && (e.xp6(3), e.Oqu(h.displayTahapan), e.xp6(2), e.Oqu(h.displayCountdown));
                        },
                        styles: [""],
                    })),
                    t
                );
            })();
        },
        57020: (d, u, s) => {
            s.d(u, { d: () => p });
            var e = s(69808),
                r = s(5e3);
            let p = (() => {
                class _ {}
                return (
                    (_.ɵfac = function (i) {
                        return new (i || _)();
                    }),
                    (_.ɵmod = r.oAB({ type: _ })),
                    (_.ɵinj = r.cJS({ imports: [[e.ez]] })),
                    _
                );
            })();
        },
        35693: (d, u, s) => {
            s.d(u, { N: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlRenstra}`);
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/renstra_sub_giat/list", t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/renstra_sub_giat/add", t);
                    }
                    view(t, n) {
                        return this.http.post(this.API_URL + `/renstra_sub_giat/view/${t}`, n);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/renstra_sub_giat/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/renstra_sub_giat/delete", t);
                    }
                    copy(t) {
                        return this.http.post(this.API_URL + "/renstra_sub_giat/copy", t);
                    }
                    find(t) {
                        return this.http.post(this.API_URL + "/renstra_sub_giat/find", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        73621: (d, u, s) => {
            s.d(u, { f: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL_MASTER = `${e.N.apiUrlMaster}`), (this.API_URL_MEDIA = `${e.N.apiUrlMedia}`);
                    }
                    list() {
                        return this.http.get(this.API_URL_MASTER + "/dok_bangda/list");
                    }
                    add(t) {
                        return this.http.post(this.API_URL_MASTER + "/dok_bangda/add", t);
                    }
                    view(t) {
                        return this.http.get(this.API_URL_MASTER + `/dok_bangda/view/${t}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL_MASTER + "/dok_bangda/update", t);
                    }
                    listUpload() {
                        return this.http.get(this.API_URL_MEDIA + "/dok_upload_bangda/list");
                    }
                    addUpload(t) {
                        return this.http.post(this.API_URL_MEDIA + "/dok_upload_bangda/add", t);
                    }
                    viewUpload(t, n) {
                        return this.http.post(this.API_URL_MEDIA + `/dok_upload_bangda/view/${t}`, n);
                    }
                    viewUploadFile(t, n) {
                        return this.http.get(this.API_URL_MEDIA + `/dok_upload_bangda/view_file/${t}/${n}`);
                    }
                    viewUploadByIdDok(t, n) {
                        return this.http.post(this.API_URL_MEDIA + `/dok_upload_bangda/viewByIdDok/${t}`, n);
                    }
                    updateUpload(t) {
                        return this.http.post(this.API_URL_MEDIA + "/dok_upload_bangda/update", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        43046: (d, u, s) => {
            s.d(u, { w: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        this.http = t;
                    }
                    list(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/list`, t);
                    }
                    view(t, n) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/view/${t}`, n);
                    }
                    add(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/add`, t);
                    }
                    update(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/update`, t);
                    }
                    lock(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/delete`, t);
                    }
                    getbyIdUnik(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/getbyidunik`, t);
                    }
                    findKebijakan(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/find_kebijakan`, t);
                    }
                    findTeks(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_kebijakan/find`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        33932: (d, u, s) => {
            s.d(u, { e: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        this.http = t;
                    }
                    list(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/list`, t);
                    }
                    view(t, n) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/view/${t}`, n);
                    }
                    add(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/add`, t);
                    }
                    update(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/update`, t);
                    }
                    lock(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/delete`, t);
                    }
                    getbyIdUnik(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/getbyidunik`, t);
                    }
                    findMisi(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/find_misi`, t);
                    }
                    findTeks(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_misi/find`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        30296: (d, u, s) => {
            s.d(u, { Q: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        this.http = t;
                    }
                    list(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/list`, t);
                    }
                    view(t, n) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/view/${t}`, n);
                    }
                    add(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/add`, t);
                    }
                    update(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/update`, t);
                    }
                    lock(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/delete`, t);
                    }
                    getbyIdUnik(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/getbyidunik`, t);
                    }
                    findSasaran(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/find_sasaran`, t);
                    }
                    findTeks(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_sasaran/find`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        60904: (d, u, s) => {
            s.d(u, { u: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        this.http = t;
                    }
                    list(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/list`, t);
                    }
                    view(t, n) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/view/${t}`, n);
                    }
                    add(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/add`, t);
                    }
                    update(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/update`, t);
                    }
                    lock(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/delete`, t);
                    }
                    getbyIdUnik(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/getbyidunik`, t);
                    }
                    findVisi(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/find_visi`, t);
                    }
                    findTeks(t) {
                        return this.http.post(`${e.N.apiUrlRpjm}/rpjpd_visi/find`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        50806: (d, u, s) => {
            s.d(u, { t: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlJadwal}`), (this.API_URL_MASTER = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/list`, t);
                    }
                    view(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/view`, t);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/add`, t);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/update`, t);
                    }
                    lock(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/lock`, t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/delete`, t);
                    }
                    cekSubtahap(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/cek_sub_tahap`, t);
                    }
                    cekAktif(t) {
                        return this.http.post(`${this.API_URL}/rpjpd_jadwal/cek_aktif`, t);
                    }
                    listTahapanRpjpd() {
                        return this.http.get(`${this.API_URL_MASTER}/tahapan/list/rpjpd`);
                    }
                    listSubTahap() {
                        return this.http.get(`${this.API_URL_MASTER}/sub_rkpd/listall`);
                    }
                    listSubTahapDinamis(t, n) {
                        return this.http.get(`${this.API_URL_MASTER}/sub_rkpd/sub_tahap/${t}/${n}`);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        74439: (d, u, s) => {
            s.d(u, { D: () => a });
            var e = s(5e3),
                r = s(64942),
                p = s(39450),
                _ = s(50806);
            let a = (() => {
                class i {
                    constructor(n, o, h) {
                        (this.konfigurasiService = n), (this.waktuService = o), (this.jadwalService = h), (this.isLoading = !1), (this.displayTahapan = ""), (this.waktu_server_sekarang = 0);
                    }
                    ngOnInit() {
                        this.loadData();
                    }
                    ngOnDestroy() {
                        var n, o;
                        null === (n = this.dataSub) || void 0 === n || n.unsubscribe(), null === (o = this.jadwalSub) || void 0 === o || o.unsubscribe();
                    }
                    loadData() {
                        (this.isLoading = !0),
                            (this.dataSub = this.jadwalService.listTahapanRpjpd().subscribe({
                                next: (n) => {
                                    (this.listTahapan = n.data.reduce((h, l) => ((h[l.id_tahap] = l.nama_tahap), h), {})), this.listJadwal();
                                },
                                error: (n) => {
                                    this.isLoading = !1;
                                },
                            }));
                    }
                    listJadwal() {
                        this.isLoading = !0;
                        const n = new FormData();
                        n.append("id_daerah", this.konfigurasiService.getIdDaerah()),
                            (this.jadwalSub = this.jadwalService.list(n).subscribe({
                                next: (o) => {
                                    const h = o.data,
                                        l = o.data.filter((v) => 0 === v.is_locked);
                                    h.length > 0
                                        ? l.length > 0
                                            ? ((this.displayTahapan = `${this.listTahapan[l[0].id_tahap]} (${l[0].jadwal_teks})`),
                                              (this.startCountdown = new Date(l[0].waktu_mulai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                              (this.endCountdown = new Date(l[0].waktu_selesai).getTime() + 60 * new Date().getTimezoneOffset() * 1e3),
                                              this.getDataWaktuServer(),
                                              (this.isLoading = !1))
                                            : ((this.displayTahapan = `${this.listTahapan[h[0].id_tahap]} (${h[0].jadwal_teks})`), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1))
                                        : ((this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"), (this.isLoading = !1));
                                },
                                error: (o) => {
                                    this.isLoading = !1;
                                },
                            }));
                    }
                    getDataWaktuServer() {
                        const n = new FormData();
                        this.waktuSub = this.waktuService.getWaktuServer(n).subscribe({
                            next: (o) => {
                                (this.waktu_server_sekarang = Number(o.data)), this.countdownTime();
                            },
                            error: (o) => {
                                this.isLoading = !1;
                            },
                        });
                    }
                    countdownTime() {
                        if (Number(this.waktu_server_sekarang) >= this.startCountdown) {
                            var n = Number(this.waktu_server_sekarang);
                            let o = setInterval(() => {
                                var h = this.endCountdown - n,
                                    l = Math.floor(h / 864e5),
                                    v = Math.floor((h % 864e5) / 36e5),
                                    g = Math.floor((h % 36e5) / 6e4),
                                    L = Math.floor((h % 6e4) / 1e3);
                                (this.displayCountdown = l + " Hari " + v + " Jam " + g + " Menit " + L + " Detik "), (n += 1e3), h < 0 && (clearInterval(o), (this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik"));
                            }, 1e3);
                        } else this.displayCountdown = "0 Hari 0 Jam 0 Menit 0 Detik";
                    }
                }
                return (
                    (i.ɵfac = function (n) {
                        return new (n || i)(e.Y36(r.W), e.Y36(p.A), e.Y36(_.t));
                    }),
                    (i.ɵcmp = e.Xpm({
                        type: i,
                        selectors: [["app-waktu-rpjpd"]],
                        decls: 6,
                        vars: 2,
                        consts: [
                            [1, "card", "card-sm", "my-5"],
                            [1, "text-center", "mt-2", "py-4"],
                        ],
                        template: function (n, o) {
                            1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h4"), e._uU(3), e.qZA(), e.TgZ(4, "h5"), e._uU(5), e.qZA()()()), 2 & n && (e.xp6(3), e.Oqu(o.displayTahapan), e.xp6(2), e.Oqu(o.displayCountdown));
                        },
                        styles: [""],
                    })),
                    i
                );
            })();
        },
        32601: (d, u, s) => {
            s.d(u, { Z: () => p });
            var e = s(69808),
                r = s(5e3);
            let p = (() => {
                class _ {}
                return (
                    (_.ɵfac = function (i) {
                        return new (i || _)();
                    }),
                    (_.ɵmod = r.oAB({ type: _ })),
                    (_.ɵinj = r.cJS({ imports: [[e.ez]] })),
                    _
                );
            })();
        },
        56732: (d, u, s) => {
            s.d(u, { P: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    view(t) {
                        return this.http.post(`${this.API_URL}/user/me`, t);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/user/update`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        25315: (d, u, s) => {
            s.d(u, { e: () => a });
            var e = s(92340),
                r = s(5e3),
                p = s(40520),
                _ = s(1329);
            let a = (() => {
                class i {
                    constructor(n, o) {
                        (this.http = n), (this.headerApiService = o), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list() {
                        return this.http.get(this.API_URL + "/landing_page_menu/all");
                    }
                    add(n) {
                        return this.http.post(this.API_URL + "/landing_page_menu/add", n);
                    }
                    view(n) {
                        return this.http.get(`${this.API_URL}/landing_page_menu/view/${n}`);
                    }
                    update(n) {
                        return this.http.post(this.API_URL + "/landing_page_menu/update", n);
                    }
                    delete(n) {
                        return this.http.post(this.API_URL + "/landing_page_menu/delete", n);
                    }
                    cekAkses(n) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, n);
                    }
                }
                return (
                    (i.ɵfac = function (n) {
                        return new (n || i)(r.LFG(p.eN), r.LFG(_.N));
                    }),
                    (i.ɵprov = r.Yz7({ token: i, factory: i.ɵfac, providedIn: "root" })),
                    i
                );
            })();
        },
        88822: (d, u, s) => {
            s.d(u, { d: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/tahun/list", t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/tahun/add", t);
                    }
                    getDaerah(t) {
                        return this.http.get(this.API_URL + `/daerah/view/${t}`);
                    }
                    getLisSKPD(t) {
                        return this.http.post(this.API_URL + "/skpd/find_by_id_skpd_list", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        72954: (d, u, s) => {
            s.d(u, { o: () => p });
            var e = s(69808),
                r = s(5e3);
            let p = (() => {
                class _ {}
                return (
                    (_.ɵfac = function (i) {
                        return new (i || _)();
                    }),
                    (_.ɵmod = r.oAB({ type: _ })),
                    (_.ɵinj = r.cJS({ imports: [[e.ez]] })),
                    _
                );
            })();
        },
        76252: (d, u, s) => {
            s.d(u, { C: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    findByIdUser(t) {
                        return this.http.post(this.API_URL + "/user_handle/find_by_id_user", t);
                    }
                    findAnggotaSkpd(t) {
                        return this.http.post(this.API_URL + "/user_handle/find_anggota_skpd", t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        57366: (d, u, s) => {
            s.d(u, { t: () => _ });
            var e = s(92340),
                r = s(5e3),
                p = s(40520);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${e.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/xtra_sgt/list", t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/xtra_sgt/add", t);
                    }
                    view(t, n, o) {
                        return this.http.get(`${this.API_URL}/xtra_sgt/view/${t}/${n}/${o}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/xtra_sgt/update", t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/xtra_sgt/delete`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(r.LFG(p.eN));
                    }),
                    (a.ɵprov = r.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        21615: (d, u, s) => {
            s.d(u, { w: () => _ });
            var e = s(40520),
                r = s(92340),
                p = s(5e3);
            let _ = (() => {
                class a {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${r.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/xtra_staf_sgt/list`, t);
                    }
                    view(t, n) {
                        return this.http.get(`${this.API_URL}/xtra_staf_sgt/view/${t}/${n}`);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/xtra_staf_sgt/add`, t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/xtra_staf_sgt/delete`, t);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/xtra_staf_sgt/update`, t);
                    }
                    roleAccess(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                    getByDaerahAndSubGiat(t, n) {
                        const o = new e.LE().set("id_daerah", t.toString()).set("id_sub_giat", n.toString());
                        return this.http.get(`${this.API_URL}/xtra_staf_sgt/get_by_daerah_and_sub_giat`, { params: o });
                    }
                    findByIdSubGiatList(t) {
                        return this.http.post(`${this.API_URL}/xtra_staf_sgt/find_by_id_sub_giat_list`, t);
                    }
                }
                return (
                    (a.ɵfac = function (t) {
                        return new (t || a)(p.LFG(e.eN));
                    }),
                    (a.ɵprov = p.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
                    a
                );
            })();
        },
        1836: (d, u, s) => {
            s.d(u, { W: () => i });
            var e = s(5e3),
                r = s(39483),
                p = s(69808);
            function _(t, n) {
                if ((1 & t && (e.ynx(0), e.TgZ(1, "p"), e._uU(2), e.qZA(), e.BQk()), 2 & t)) {
                    const o = e.oxw();
                    e.xp6(2), e.Oqu(o.custom_message);
                }
            }
            function a(t, n) {
                if ((1 & t && (e.ynx(0), e.TgZ(1, "p"), e._uU(2), e.qZA(), e.BQk()), 2 & t)) {
                    const o = e.oxw();
                    e.xp6(2), e.hij("Apakah Anda yakin ingin ", o.pesan, " data ini?");
                }
            }
            let i = (() => {
                class t {
                    constructor(o) {
                        (this.modal = o), (this.warna = "warning"), (this.pesan = "mengunci"), (this.judul = "Mengunci"), (this.custom_message = "");
                    }
                    ngOnInit() {}
                }
                return (
                    (t.ɵfac = function (o) {
                        return new (o || t)(e.Y36(r.Kz));
                    }),
                    (t.ɵcmp = e.Xpm({
                        type: t,
                        selectors: [["app-confirmation-dialog-lock"]],
                        inputs: { warna: "warna", pesan: "pesan", judul: "judul", custom_message: "custom_message" },
                        decls: 12,
                        vars: 7,
                        consts: [
                            [1, "modal-header"],
                            ["id", "modal-title", 1, "modal-title"],
                            ["type", "button", "aria-describedby", "modal-title", 1, "btn-close", 3, "click"],
                            [1, "modal-body"],
                            [4, "ngIf"],
                            [1, "modal-footer"],
                            ["type", "button", 1, "btn", "btn-secondary", 3, "click"],
                            ["type", "button", 3, "click"],
                        ],
                        template: function (o, h) {
                            1 & o &&
                                (e.TgZ(0, "div", 0)(1, "h4", 1),
                                e._uU(2),
                                e.qZA(),
                                e.TgZ(3, "button", 2),
                                e.NdJ("click", function () {
                                    return h.modal.dismiss("Cross click");
                                }),
                                e.qZA()(),
                                e.TgZ(4, "div", 3),
                                e.YNc(5, _, 3, 1, "ng-container", 4),
                                e.YNc(6, a, 3, 1, "ng-container", 4),
                                e.qZA(),
                                e.TgZ(7, "div", 5)(8, "button", 6),
                                e.NdJ("click", function () {
                                    return h.modal.dismiss("cancel click");
                                }),
                                e._uU(9, " Tidak, batalkan "),
                                e.qZA(),
                                e.TgZ(10, "button", 7),
                                e.NdJ("click", function () {
                                    return h.modal.close("Ok click");
                                }),
                                e._uU(11),
                                e.qZA()()),
                                2 & o &&
                                    (e.xp6(2),
                                    e.hij("Konfimasi ", h.judul, " Data"),
                                    e.xp6(3),
                                    e.Q6J("ngIf", h.custom_message),
                                    e.xp6(1),
                                    e.Q6J("ngIf", !h.custom_message),
                                    e.xp6(4),
                                    e.Gre("btn btn-", h.warna, ""),
                                    e.xp6(1),
                                    e.hij(" Ya, ", h.pesan, " data ini "));
                        },
                        directives: [p.O5],
                        styles: [""],
                    })),
                    t
                );
            })();
        },
        53101: (d, u, s) => {
            s.d(u, { E: () => L });
            var e = s(84408);
            let p,
                r = 1;
            const _ = {};
            function a(P) {
                return P in _ && (delete _[P], !0);
            }
            const i = {
                    setImmediate(P) {
                        const c = r++;
                        return (_[c] = !0), p || (p = Promise.resolve()), p.then(() => a(c) && P()), c;
                    },
                    clearImmediate(P) {
                        a(P);
                    },
                },
                { setImmediate: n, clearImmediate: o } = i,
                h = {
                    setImmediate(...P) {
                        const { delegate: c } = h;
                        return ((null == c ? void 0 : c.setImmediate) || n)(...P);
                    },
                    clearImmediate(P) {
                        const { delegate: c } = h;
                        return ((null == c ? void 0 : c.clearImmediate) || o)(P);
                    },
                    delegate: void 0,
                };
            var v = s(97565);
            const L = new (class g extends v.v {
                flush(c) {
                    this._active = !0;
                    const U = this._scheduled;
                    this._scheduled = void 0;
                    const { actions: m } = this;
                    let R;
                    c = c || m.shift();
                    do {
                        if ((R = c.execute(c.state, c.delay))) break;
                    } while ((c = m[0]) && c.id === U && m.shift());
                    if (((this._active = !1), R)) {
                        for (; (c = m[0]) && c.id === U && m.shift(); ) c.unsubscribe();
                        throw R;
                    }
                }
            })(
                class l extends e.o {
                    constructor(c, U) {
                        super(c, U), (this.scheduler = c), (this.work = U);
                    }
                    requestAsyncId(c, U, m = 0) {
                        return null !== m && m > 0 ? super.requestAsyncId(c, U, m) : (c.actions.push(this), c._scheduled || (c._scheduled = h.setImmediate(c.flush.bind(c, void 0))));
                    }
                    recycleAsyncId(c, U, m = 0) {
                        var R;
                        if (null != m ? m > 0 : this.delay > 0) return super.recycleAsyncId(c, U, m);
                        const { actions: I } = c;
                        null != U && (null === (R = I[I.length - 1]) || void 0 === R ? void 0 : R.id) !== U && (h.clearImmediate(U), (c._scheduled = void 0));
                    }
                }
            );
        },
    },
]);
