/**
 * ✏️ UBAH DI SINI: nama kantor, ruangan, agen, jadwal, dan data contoh.
 * Semua yang tampil di kantor diambil dari file ini. Nama dan angka di bawah fiktif.
 */

import laporanAgen from './laporan.json';
import type { GayaId } from './gaya/daftar';

export const KANTOR = {
  nama: 'Dr. Bahtera Gurning & Rekans ',
  /** Baris kecil di bawah nama (mis. nama perusahaan). */
  subjudul: 'Law Automation System (LAS) · Kantor Advokat AI',
};

/**
 * Gaya 3D kantor (lihat README, "Ganti gaya 3D"): 'asli' | 'clay' | 'felt' | 'voxel' | 'vinyl' | 'diorama' | 'kayu' |
 * 'stickman' | 'pulau' | 'toko' | 'menara' | 'taman' | 'gedung30' | 'hologram' | 'angkringan' | 'pecellele' | 'bakso'. Bisa ditimpa lewat ?gaya=<id> atau pemilih di layar.
 */
export const GAYA: GayaId = 'asli';
/** Tombol pemilih gaya di pojok kanan bawah. false = sembunyikan (mis. untuk video final). */
export const TAMPIL_PEMILIH_GAYA = true;

/** Tiga ruangan dari kiri ke kanan. Lebarnya ikut `x0`–`x1` (meter), lantainya `warna`, karpetnya `karpet`. */
export const RUANGAN = [
  { key: 'bizdev', label: 'Layanan & Litigasi', x0: -7, x1: -1.8, warna: '#e9d9c4', karpet: '#e4572e' },
  { key: 'keuangan', label: 'Akuntansi & Pajak', x0: -1.8, x1: 2, warna: '#efe3cf', karpet: '#f2b134' },
  { key: 'studio', label: 'Dokumen & HR', x0: 2, x1: 7, warna: '#e3d6c6', karpet: '#3a86ff' },
] as const;
export type RoomKey = (typeof RUANGAN)[number]['key'];

export interface Agen {
  key: string;
  nama: string;
  /** Tugasnya, satu baris. */
  tugas: string;
  ruang: RoomKey;
  /** Warna baju. */
  warna: string;
  /** Posisi meja (x kiri–kanan −7…7, z belakang–depan −3…3). */
  x: number;
  z: number;
}

/** Enam agen AI kantor advokat. Tambah atau kurangi sesukamu (posisi meja jangan bertumpuk). */
export const AGEN: Agen[] = [
  { key: 'cs', nama: 'Customer Service', tugas: 'Konsultasi WA AI, Auto-Book & Cek Konflik (Clara)', ruang: 'bizdev', warna: '#2a9d8f', x: -5.2, z: -1.4 },
  { key: 'litigasi', nama: 'Staff Litigasi', tugas: 'Manajemen 6 Tahap Perkara & Jadwal Sidang (Nadia)', ruang: 'bizdev', warna: '#e4572e', x: -3.2, z: -1.4 },
  { key: 'paralegal', nama: 'Staff Paralegal', tugas: 'Administrasi Berkas Pengadilan & e-Court (Siti)', ruang: 'bizdev', warna: '#8e6bd8', x: -4.2, z: 1.2 },
  { key: 'akuntansi', nama: 'Staff Akuntansi', tugas: 'Trust Account, Invoice Retainer & Pajak PPh 23/PPN (Riska)', ruang: 'keuangan', warna: '#f2b134', x: 0.6, z: -0.2 },
  { key: 'dokumen', nama: 'Staff Dokumen', tugas: 'Otomatisasi Surat Kuasa, E-Sign & Masa Berlaku Izin (Bima)', ruang: 'studio', warna: '#3a86ff', x: 3.6, z: -1.2 },
  { key: 'hr', nama: 'Staff HR', tugas: 'Absensi GPS Pengadilan, Timesheet & Komisi Payroll (Raka)', ruang: 'studio', warna: '#ff5d8f', x: 5.4, z: 0.8 },
];

export type Aktivitas = 'kerja' | 'laporan' | 'belajar';

/** Jadwal kerja (WIB). `agen: '*'` = semua agen. `hari` 1 = Senin … 7 = Minggu. `menit` = lama tampil. */
export const JADWAL: { agen: string[] | '*'; mulai: string; menit: number; hari: number[]; aktivitas: Aktivitas; label: string }[] = [
  { agen: ['cs'], mulai: '07:32', menit: 25, hari: [1, 2, 3, 4, 5], aktivitas: 'kerja', label: 'membalas WA klien & cek konflik…' },
  { agen: ['litigasi'], mulai: '07:57', menit: 30, hari: [1, 2, 3, 4, 5], aktivitas: 'kerja', label: 'pantau tahapan perkara & sidang…' },
  { agen: ['dokumen'], mulai: '08:05', menit: 30, hari: [1, 2, 3, 4, 5], aktivitas: 'kerja', label: 'menyusun surat kuasa & E-Sign…' },
  { agen: ['paralegal'], mulai: '08:12', menit: 30, hari: [1, 2, 3, 4, 5], aktivitas: 'kerja', label: 'menyiapkan berkas bukti e-Court…' },
  { agen: ['akuntansi'], mulai: '08:18', menit: 30, hari: [1, 2, 3, 4, 5], aktivitas: 'kerja', label: 'rekonsiliasi Trust Account & pajak…' },
  { agen: ['hr'], mulai: '08:22', menit: 30, hari: [1, 2, 3, 4, 5], aktivitas: 'kerja', label: 'verifikasi absensi GPS & timesheet…' },
  { agen: '*', mulai: '15:42', menit: 25, hari: [1, 2, 3, 4, 5], aktivitas: 'laporan', label: 'menyusun laporan harian kantor hukum…' },
  { agen: '*', mulai: '20:00', menit: 120, hari: [1, 2, 3, 4, 5, 6, 7], aktivitas: 'belajar', label: 'mempelajari yurisprudensi & regulasi…' },
];

/** Jam kantor: di luar jadwal, agen "siap menerima perintah" (atau ngopi, lihat papan, ngobrol). */
export const JAM_KANTOR = { buka: '07:30', tutup: '18:00' };

export interface Laporan {
  /** Ringkasan hari ini (gelembung di atas kepala). */
  ringkasan?: string;
  /** Butir yang menunggu keputusanmu (tanda "!" dan Mission Board). */
  menunggu?: string[];
  /** Butir mendesak (mejanya berkedip). */
  mendesak?: string[];
  /** Angka hari ini (Mission Board). Jangan isi nominal uang kalau videonya mau dibagikan. */
  angka?: { label: string; nilai: string }[];
}

/**
 * Laporan hari ini per agen. Ini data contoh; untuk data asli, isi dari API/JSON agenmu (lihat README, "Sambungkan agen
 * asli").
 */
export const LAPORAN: Record<string, Laporan> = laporanAgen;

/** Timelapse: satu hari dalam tiga babak (detik = lama tiap babak di video). */
export const BABAK = [
  { dari: '07:28', sampai: '08:44', detik: 12, judul: 'Pagi · cek sidang, berkas & klien' },
  { dari: '15:36', sampai: '16:10', detik: 9, judul: 'Sore · rekap perkara & keuangan' },
  { dari: '19:52', sampai: '20:26', detik: 9, judul: 'Malam · riset yurisprudensi' },
];
