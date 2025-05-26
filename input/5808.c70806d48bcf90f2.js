"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [5808],
    {
        70846: (o, u, i) => {
            i.d(u, { D: () => e });
            var s = i(5e3),
                r = i(39483),
                a = i(69808);
            const _ = function (n) {
                return { color: n };
            };
            let e = (() => {
                class n {
                    constructor(h) {
                        (this.activeModal = h), (this.tipe_icon = "info"), (this.warna_icon = "primary");
                    }
                    ngOnInit() {}
                    ngOnDestroy() {}
                }
                return (
                    (n.ɵfac = function (h) {
                        return new (h || n)(s.Y36(r.Kz));
                    }),
                    (n.ɵcmp = s.Xpm({
                        type: n,
                        selectors: [["app-verifikasi-modal"]],
                        inputs: { tipe_icon: "tipe_icon", warna_icon: "warna_icon", isi_text: "isi_text", tombol_true_text: "tombol_true_text", tombol_false_text: "tombol_false_text" },
                        decls: 26,
                        vars: 7,
                        consts: [
                            [1, "modal-header"],
                            ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"],
                            ["xmlns", "http://www.w3.org/2000/svg", 2, "display", "none"],
                            ["id", "check-fill", "fill", "currentColor", "viewBox", "0 0 16 16"],
                            ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"],
                            ["id", "info-fill", "fill", "currentColor", "viewBox", "0 0 16 16"],
                            [
                                "d",
                                "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
                            ],
                            ["id", "exclamation-fill", "fill", "currentColor", "viewBox", "0 0 16 16"],
                            [
                                "d",
                                "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
                            ],
                            [1, "card", "mb-3"],
                            [1, "collapse", "show"],
                            [1, "card-body", "border-top"],
                            [1, "row", "d-flex", "justify-content-center"],
                            [1, "col-lg-4", "text-center", "hover-hand"],
                            [1, "row"],
                            [1, "position-relative", "mb-5"],
                            ["width", "100", "height", "100", "role", "img", "aria-label", "Info:", 1, "bi", "flex-shrink-0", "me-2", "bs-primary", 3, "ngStyle"],
                            [1, "col-lg-12", "fv-row", "fw-bold", "fs-2", "lead", "text-center"],
                            [1, "card-footer", "d-flex", "justify-content-between", "py-5", "px-9"],
                            [1, "btn", "btn-outline-danger", 3, "click"],
                            ["type", "button", 1, "btn", "btn-success", 3, "click"],
                        ],
                        template: function (h, p) {
                            1 & h &&
                                (s.TgZ(0, "div", 0)(1, "button", 1),
                                s.NdJ("click", function () {
                                    return p.activeModal.dismiss("close");
                                }),
                                s.qZA()(),
                                s.O4$(),
                                s.TgZ(2, "svg", 2)(3, "symbol", 3),
                                s._UZ(4, "path", 4),
                                s.qZA(),
                                s.TgZ(5, "symbol", 5),
                                s._UZ(6, "path", 6),
                                s.qZA(),
                                s.TgZ(7, "symbol", 7),
                                s._UZ(8, "path", 8),
                                s.qZA()(),
                                s.kcU(),
                                s.TgZ(9, "div", 9)(10, "div", 10)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15),
                                s.O4$(),
                                s.TgZ(17, "svg", 16),
                                s._UZ(18, "use"),
                                s.qZA()()()()(),
                                s.kcU(),
                                s.TgZ(19, "div", 17),
                                s._uU(20),
                                s.qZA()(),
                                s.TgZ(21, "div", 18)(22, "span", 19),
                                s.NdJ("click", function () {
                                    return p.activeModal.close(!1);
                                }),
                                s._uU(23),
                                s.qZA(),
                                s.TgZ(24, "button", 20),
                                s.NdJ("click", function () {
                                    return p.activeModal.close(!0);
                                }),
                                s._uU(25),
                                s.qZA()()()()()),
                                2 & h &&
                                    (s.xp6(17),
                                    s.Q6J("ngStyle", s.VKq(5, _, "var(--bs-" + p.warna_icon + ")")),
                                    s.xp6(1),
                                    s.uIk("href", "#" + p.tipe_icon + "-fill", null, "xlink"),
                                    s.xp6(2),
                                    s.hij(" ", p.isi_text, " "),
                                    s.xp6(3),
                                    s.hij(" ", null != p.tombol_false_text ? p.tombol_false_text : "Tutup", " "),
                                    s.xp6(2),
                                    s.hij(" ", null != p.tombol_true_text ? p.tombol_true_text : "Simpan Perubahan Data", " "));
                        },
                        directives: [a.PC],
                        styles: [""],
                    })),
                    n
                );
            })();
        },
        39450: (o, u, i) => {
            i.d(u, { A: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${s.N.apiUrlMaster}`);
                    }
                    getWaktuServer(t) {
                        return this.http.post(this.API_URL + "/waktu_server/get_waktu", t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        2664: (o, u, i) => {
            i.d(u, { w: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${s.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/list`, t);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/add`, t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/delete`, t);
                    }
                    view(t, h) {
                        return this.http.get(`${this.API_URL}/kecamatan/view/${h}/${t}`);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/update`, t);
                    }
                    getKecamatanByProvinsi(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/getdatabyprop`, t);
                    }
                    filterByKabkot(t, h) {
                        return this.http.get(`${this.API_URL}/kecamatan/filter_by_kabkot/${t}/${h}`);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/findByKabkota`, t);
                    }
                    search(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/search_by_kotkab`, t);
                    }
                    searchAll(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/search_all`, t);
                    }
                    searchByKotkabAndTahun(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/search_by_kotkab_and_tahun`, t);
                    }
                    listByKotkabAndTahun(t) {
                        return this.http.post(`${this.API_URL}/kecamatan/list_by_kotkab_and_tahun`, t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        37714: (o, u, i) => {
            i.d(u, { O: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${s.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/list`, t);
                    }
                    listFullJoinByDaerah(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/list_full_join_by_daerah`, t);
                    }
                    listAllByTahun(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/listallbytahun`, t);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/add`, t);
                    }
                    view(t, h) {
                        return this.http.get(`${this.API_URL}/kelurahan/view/${t}/${h}`);
                    }
                    update(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/update`, t);
                    }
                    delete(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/delete`, t);
                    }
                    getKelurahanByProvinsi(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/getdatabyprop`, t);
                    }
                    filterByKecamatan(t) {
                        return this.http.get(`${this.API_URL}/kelurahan/filter_by_kecamatan/${t}`);
                    }
                    cekAkses(t) {
                        return this.http.post(`${this.API_URL}/ref_group_menu/check_access`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/findByKabkotaAndCamat`, t);
                    }
                    search(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/search_by_kecamatan`, t);
                    }
                    listByKecamatanAndTahun(t) {
                        return this.http.post(`${this.API_URL}/kelurahan/list_by_kecamatan_and_tahun`, t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        77562: (o, u, i) => {
            i.d(u, { J: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${s.N.apiUrlMaster}`);
                    }
                    listByTahunAndDaerah(t, h) {
                        return this.http.get(`${this.API_URL}/skpd/list/${t}/${h}`);
                    }
                    list(t) {
                        return this.http.post(`${this.API_URL}/skpd/listNew`, t);
                    }
                    listArsip(t) {
                        return this.http.post(`${this.API_URL}/skpd/list_arsip`, t);
                    }
                    listInput(t) {
                        return this.http.post(`${this.API_URL}/skpd/listinput`, t);
                    }
                    listSetInput(t) {
                        return this.http.post(`${this.API_URL}/skpd/list_tpp`, t);
                    }
                    listPerangkatDaerah(t) {
                        return this.http.post(`${this.API_URL}/skpd/listAll`, t);
                    }
                    listAllSkpd(t) {
                        return this.http.post(`${this.API_URL}/skpd/listAllSkpd`, t);
                    }
                    listPerangkatDaerahByIdLevel(t) {
                        return this.http.post(`${this.API_URL}/skpd/listByIdLevel`, t);
                    }
                    find(t) {
                        return this.http.post(`${this.API_URL}/skpd/find`, t);
                    }
                    findByIdBidangUrusan(t) {
                        return this.http.post(`${this.API_URL}/skpd/find_by_id_bidang_urusan`, t);
                    }
                    findByIdDaerah(t) {
                        return this.http.post(`${this.API_URL}/skpd/find_sub_unit_by_id_daerah`, t);
                    }
                    findByIdSkpdList(t) {
                        return this.http.post(`${this.API_URL}/skpd/find_by_id_skpd_list`, t);
                    }
                    findforKamusUsulan(t) {
                        return this.http.post(`${this.API_URL}/skpd/find_kamus_usulan`, t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/skpd/add", t);
                    }
                    view(t, h, p) {
                        return this.http.get(`${this.API_URL}/skpd/view/${t}/${h}/${p}`);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/skpd/update", t);
                    }
                    delete(t) {
                        return this.http.post(this.API_URL + "/skpd/delete", t);
                    }
                    lock(t) {
                        return this.http.post(`${this.API_URL}/skpd/lock`, t);
                    }
                    lockAll(t) {
                        return this.http.post(`${this.API_URL}/skpd/lockall`, t);
                    }
                    restore(t) {
                        return this.http.post(`${this.API_URL}/skpd/restore`, t);
                    }
                    mappingWilayah(t) {
                        return this.http.post(`${this.API_URL}/skpd/mapping_wilayah`, t);
                    }
                    mutakhirkanAdmin(t) {
                        return this.http.post(`${this.API_URL}/skpd/update_admin_skpd`, t);
                    }
                    roleAccess(t) {
                        return this.http.post(`${s.N.apiUrlMaster}/ref_group_menu/check_access`, t);
                    }
                    findSkpdAndUnit(t) {
                        return this.http.post(`${this.API_URL}/skpd/find_skpd_and_unit`, t);
                    }
                    findForSetInput(t) {
                        return this.http.post(`${this.API_URL}/skpd/find_for_set_input`, t);
                    }
                    listForSetInput(t) {
                        return this.http.post(`${this.API_URL}/skpd/list_for_set_input`, t);
                    }
                    cekSkpd(t) {
                        return this.http.get(`${this.API_URL}/skpd/cek_skpd`, { params: t });
                    }
                    findByTahunDaerahUnit(t) {
                        return this.http.get(`${this.API_URL}/skpd/find_by_tahun_daerah_unit`, { params: t });
                    }
                    getNamaUnitSubUnit(t) {
                        return this.http.post(`${s.N.apiUrlMaster}/skpd/get_unit_sub_unit_nama`, t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        11363: (o, u, i) => {
            i.d(u, { x: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${s.N.apiUrlRenja}`), (this.API_OTHER = `${s.N.apiUrlOther}`);
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/sub_bl/list", t);
                    }
                    listByIdSubSKPD(t) {
                        return this.http.post(this.API_URL + "/sub_bl/list_by_sub_skpd", t);
                    }
                    listBelanjaByTahunDaerahUnit(t) {
                        return this.http.post(this.API_URL + "/sub_bl/list_belanja_by_tahun_daerah_unit", t);
                    }
                    listByDaerahAndTahun(t) {
                        return this.http.post(this.API_URL + "/sub_bl/list_by_daerah_and_tahun", t);
                    }
                    listByIdSkpdList(t) {
                        return this.http.post(this.API_URL + "/sub_bl/find_by_id_skpd_list", t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/sub_bl/add", t);
                    }
                    view(t, h) {
                        return this.http.post(this.API_URL + `/sub_bl/view/${t}`, h);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update", t);
                    }
                    sumNilaiPaguForUnit(t) {
                        return this.http.post(this.API_URL + "/sub_bl/sum_nilai_pagu_by_unit", t);
                    }
                    listSubBL(t) {
                        return this.http.post(this.API_URL + "/sub_bl/list_belanja_new", t);
                    }
                    validasiSemuaPagu(t) {
                        return this.http.post(this.API_URL + "/sub_bl/validasi_semua_pagu", t);
                    }
                    validasiPaguBelanja(t) {
                        return this.http.post(this.API_URL + "/sub_bl/validasi_pagu_belanja", t);
                    }
                    updatePaguIndikatif(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_pagu_indikatif", t);
                    }
                    getSubGiatBySKPD(t) {
                        return this.http.post(this.API_URL + "/sub_bl/find_sub_giat_by_skpd", t);
                    }
                    getSubGiatBySKPDSubGiat(t) {
                        return this.http.post(this.API_URL + "/sub_bl/find_sub_giat_by_skpd_sub_giat", t);
                    }
                    sinkronPokir(t) {
                        return this.http.post(this.API_URL + "/sub_bl/sinkron_pokir", t);
                    }
                    sinkronBantuan(t) {
                        return this.http.post(this.API_URL + "/sub_bl/sinkron_bantuan", t);
                    }
                    updateKunciBelanjaDaerah(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_kunci_belanja_daerah", t);
                    }
                    updateKunciRincianBelanjaDaerah(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_kunci_rincian_belanja_daerah", t);
                    }
                    updateKunciBelanjaUnit(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_kunci_belanja_unit", t);
                    }
                    updateKunciRincianBelanjaUnit(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_kunci_rincian_belanja_unit", t);
                    }
                    updateKunciBelanjaPerKegiatan(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_kunci_belanja_per_kegiatan", t);
                    }
                    updateKunciRincianBelanjaPerKegiatan(t) {
                        return this.http.post(this.API_URL + "/sub_bl/update_kunci_rincian_belanja_per_kegiatan", t);
                    }
                    listSkpd(t) {
                        return this.http.post(this.API_URL + "/sub_bl/list_skpd", t);
                    }
                    loadDataBL(t) {
                        return this.http.post(this.API_URL + "/bl/load_data", t);
                    }
                    simpanBL(t) {
                        return this.http.post(this.API_URL + "/bl/simpandata", t);
                    }
                    ambilArkasDariTemp(t) {
                        return this.http.post(this.API_OTHER + "/other/updatedatarkafromarkas", t);
                    }
                    rekapPemutakhiran(t) {
                        return this.http.post(this.API_URL + "/sub_bl/rekappemutakhiran", t);
                    }
                    rekapPemutakhiranSKPD(t) {
                        return this.http.post(this.API_URL + "/sub_bl/rekappemutakhiranskpd", t);
                    }
                    loadHasilBL(t) {
                        return this.http.post(this.API_URL + "/hasil_bl/load_data", t);
                    }
                    simpanHasilBL(t) {
                        return this.http.post(this.API_URL + "/hasil_bl/add", t);
                    }
                    updateHasilBL(t) {
                        return this.http.post(this.API_URL + "/hasil_bl/update", t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        88664: (o, u, i) => {
            i.d(u, { K: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL = `${s.N.apiUrlMaster}`);
                    }
                    list(t) {
                        return this.http.post(this.API_URL + "/user/listuserbylevelid", t);
                    }
                    listMasyarakat(t) {
                        return this.http.post(`${this.API_URL}/user/list_user_masyarakat`, t);
                    }
                    listDaerah(t) {
                        return this.http.post(this.API_URL + "/user/listuseradmindaerah", t);
                    }
                    listForPenerimaBantuan(t) {
                        return this.http.post(this.API_URL + "/profil_user/list_for_penerima_bantuan", t);
                    }
                    add(t) {
                        return this.http.post(this.API_URL + "/user/add", t);
                    }
                    addUserSkpd(t) {
                        return this.http.post(`${this.API_URL}/user/add_user_skpd`, t);
                    }
                    addSkpdPemangku(t) {
                        return this.http.post(`${this.API_URL}/user/add_user_skpd_pemangku`, t);
                    }
                    view(t) {
                        return this.http.post(this.API_URL + "/user/view", t);
                    }
                    viewUserSkpd(t) {
                        return this.http.post(`${this.API_URL}/user/view_user_skpd`, t);
                    }
                    viewUserSkpdPemangku(t) {
                        return this.http.post(`${this.API_URL}/user/view_user_skpd_pemangku`, t);
                    }
                    update(t) {
                        return this.http.post(this.API_URL + "/user/update_profile", t);
                    }
                    updateUserSkpd(t) {
                        return this.http.post(`${this.API_URL}/user/update_user_skpd`, t);
                    }
                    changePassword(t) {
                        return this.http.post(this.API_URL + "/user/change_password", t);
                    }
                    lock(t) {
                        return this.http.post(this.API_URL + "/user/lock", t);
                    }
                    hapus(t) {
                        return this.http.post(this.API_URL + "/user/delete", t);
                    }
                    deleteUserMasyarakat(t) {
                        return this.http.post(`${this.API_URL}/user/delete_user_masyarakat`, t);
                    }
                    deleteUserSkpdPemangku(t) {
                        return this.http.post(`${this.API_URL}/user/delete_user_skpd_pemangku`, t);
                    }
                    registerUserMasyarakat(t) {
                        return this.http.post(`${this.API_URL}/user/register_user`, t);
                    }
                    reset_password(t) {
                        return this.http.post(this.API_URL + "/user/reset_password", t);
                    }
                    reset_password_skpd(t) {
                        return this.http.post(this.API_URL + "/user/reset_password_skpd", t);
                    }
                    viewProfile(t, h) {
                        return this.http.post(this.API_URL + "/profil_user/view/" + h, t);
                    }
                    getProfile(t) {
                        return this.http.post(`${this.API_URL}/profil_user/view_profil`, t);
                    }
                    addProfile(t) {
                        return this.http.post(`${this.API_URL}/profil_user/insert`, t);
                    }
                    getFile(t) {
                        return this.http.get(`${this.API_URL}/user/cek_file/${t}`);
                    }
                    findlistProv(t) {
                        return this.http.post(`${s.N.apiUrlMaster}/provinsi/findlistpusat`, t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        13435: (o, u, i) => {
            i.d(u, { y: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL_MASTER = `${s.N.apiUrlMaster}`), (this.API_URL_JADWAL = `${s.N.apiUrlJadwal}`), (this.API_URL = `${s.N.apiUrlUsulan}`);
                    }
                    listPengajuan(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/listPengajuan`, t);
                    }
                    listVerifikasiPokir(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/list_verifikasi`, t);
                    }
                    listVerifikasi(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/listVerifikasi`, t);
                    }
                    listMonitorOLD(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/listMonitor`, t);
                    }
                    listMonitor(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/monitor`, t);
                    }
                    listDitolak(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/listUsulanDitolak`, t);
                    }
                    addOLD(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/add`, t);
                    }
                    add(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/addnew`, t);
                    }
                    addPokirOLD(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/simpan_usulan`, t);
                    }
                    addPokir(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/simpan_usulan_new`, t);
                    }
                    edit(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/editnew`, t);
                    }
                    editPokir(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/edit_new`, t);
                    }
                    editOLD(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/edit`, t);
                    }
                    editPokirOLD(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/edit`, t);
                    }
                    ubahStatus(t) {
                        return this.http.post(`${this.API_URL}/stat_usul_bantuan/ubahStatus`, t);
                    }
                    ubahStatusPokir(t) {
                        return this.http.post(`${this.API_URL}/stat_usul_pokir/ubahStatus`, t);
                    }
                    view(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/view`, t);
                    }
                    viewPokir(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/view`, t);
                    }
                    viewDaerah(t) {
                        return this.http.get(`${this.API_URL_MASTER}/daerah/view/${t}`);
                    }
                    rekomPokir(t) {
                        return this.http.post(`${this.API_URL}/stat_usul_pokir/setRekomendasi`, t);
                    }
                    rekom(t) {
                        return this.http.post(`${this.API_URL}/stat_usul_bantuan/setRekomendasi`, t);
                    }
                    updateRekomPokir(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/updateRekomendasi`, t);
                    }
                    totalApprove(t) {
                        return this.http.post(`${this.API_URL}/usul_bantuan/total_approve`, t);
                    }
                    cekAktif(t) {
                        return this.http.post(this.API_URL_JADWAL + "/usul_jadwal/cekJadwalAktif", t);
                    }
                    cekAktifProv(t) {
                        return this.http.post(this.API_URL_JADWAL + "/usul_jadwal/cekJadwalAktifProv", t);
                    }
                    getProfilUser(t, h) {
                        return this.http.post(this.API_URL_MASTER + "/profil_user/view/" + h.toString(), t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        91473: (o, u, i) => {
            i.d(u, { B: () => _ });
            var s = i(92340),
                r = i(5e3),
                a = i(40520);
            let _ = (() => {
                class e {
                    constructor(t) {
                        (this.http = t), (this.API_URL_MASTER = `${s.N.apiUrlMaster}`), (this.API_URL_JADWAL = `${s.N.apiUrlJadwal}`), (this.API_URL = `${s.N.apiUrlUsulan}`);
                    }
                    listPengajuan(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/list_pengajuan`, t);
                    }
                    listApprove(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/list_approve`, t);
                    }
                    totalApprove(t) {
                        return this.http.post(`${this.API_URL}/usul_pokir/total_approve`, t);
                    }
                }
                return (
                    (e.ɵfac = function (t) {
                        return new (t || e)(r.LFG(a.eN));
                    }),
                    (e.ɵprov = r.Yz7({ token: e, factory: e.ɵfac, providedIn: "root" })),
                    e
                );
            })();
        },
        51026: (o, u, i) => {
            i.d(u, { I: () => r });
            var s = i(5e3);
            let r = (() => {
                class a {
                    constructor() {}
                    ngOnInit() {}
                }
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵcmp = s.Xpm({
                        type: a,
                        selectors: [["app-loading-shade"]],
                        decls: 6,
                        vars: 0,
                        consts: [
                            [1, "sipd-loading-shade"],
                            [1, "lds-ring"],
                        ],
                        template: function (e, n) {
                            1 & e && (s.TgZ(0, "div", 0)(1, "div", 1), s._UZ(2, "div")(3, "div")(4, "div")(5, "div"), s.qZA()());
                        },
                        styles: [""],
                    })),
                    a
                );
            })();
        },
        12152: (o, u, i) => {
            i.d(u, { g: () => r });
            var s = i(5e3);
            let r = (() => {
                class a {
                    constructor() {}
                    ngOnInit() {}
                }
                return (
                    (a.ɵfac = function (e) {
                        return new (e || a)();
                    }),
                    (a.ɵcmp = s.Xpm({
                        type: a,
                        selectors: [["app-loading-spinner"]],
                        decls: 2,
                        vars: 0,
                        consts: [
                            [1, "card", "card-xl-stretch", "mb-xl-8", "d-flex", "justify-content-center", "align-items-center", "w-100", "h-100"],
                            ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"],
                        ],
                        template: function (e, n) {
                            1 & e && (s.TgZ(0, "div", 0), s._UZ(1, "div", 1), s.qZA());
                        },
                        styles: [""],
                    })),
                    a
                );
            })();
        },
    },
]);
