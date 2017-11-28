var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8008/', 'dir': '_m0/0', 'linked': 2, 'len': 123 },
    { 'url': 'http://localhost:8008/przelew.php/sfi9876', 'dir': '_m0/1', 'linked': 2, 'len': 921 },
    { 'url': 'http://localhost:8008/confirm.php/', 'dir': '_m0/2', 'linked': 5, 'len': 1241 },
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'dir': '_m0/3', 'linked': 5, 'len': 1089 },
    { 'url': 'http://localhost:8008/przelew.php/', 'dir': '_m0/4', 'linked': 5, 'len': 1074 },
    { 'url': 'http://localhost:8008/historia.php', 'dir': '_m0/5', 'linked': 0, 'len': 530 },
    { 'url': 'http://localhost:8008/login.php', 'dir': '_m0/6', 'linked': 2, 'len': 813 },
    { 'url': 'http://localhost:8008/logintodatabase.php', 'dir': '_m0/7', 'linked': 2, 'len': 739 },
    { 'url': 'http://localhost:8008/przelewregister.php', 'dir': '_m0/8', 'linked': 5, 'len': 167 },
    { 'url': 'http://localhost:8008/przelewregister.php', 'dir': '_m0/9', 'linked': 5, 'len': 547 },
    { 'url': 'http://localhost:8008/register.php?error=emptylogin', 'dir': '_m0/10', 'linked': 2, 'len': 826 },
    { 'url': 'http://localhost:8008/server-status', 'dir': '_m0/11', 'linked': 0, 'len': 8127 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:8008/test.html', 'dir': '_m1/0', 'linked': 0, 'len': 764 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8008/example.txt', 'dir': '_m2/0', 'linked': 0, 'len': 1601 },
    { 'url': 'http://localhost:8008/confirmregister.php', 'dir': '_m2/1', 'linked': 5, 'len': 1 },
    { 'url': 'http://localhost:8008/test.php', 'dir': '_m2/2', 'linked': 0, 'len': 14 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i0/9' } ]
  },
  { 'severity': 2, 'type': 30909, 'samples': [
    { 'url': 'http://localhost:8008/server-status', 'extra': 'Apache mod_status page detected', 'sid': '11004', 'dir': '_i1/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8008/confirm.php/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://localhost:8008/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://localhost:8008/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i2/21' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://localhost:8008/confirm.php/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8008/przelew.php/', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8008/przelew.php/announcement.sfish', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8008/przelew.php/przelewregister.php', 'extra': '', 'sid': '0', 'dir': '_i3/3' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost:8008/example.txt', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/5' },
    { 'url': 'http://localhost:8008/test.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/6' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8008/logintodatabase.php', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8008/logintodatabase.php', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8008/registertodatabase.php', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8008/registertodatabase.php', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8008/registertodatabase.php', 'extra': '', 'sid': '0', 'dir': '_i6/4' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://localhost:8008/confirmregister.php', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i7/6' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i7/7' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i7/8' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i7/9' },
    { 'url': 'http://localhost:8008/confirm.php', 'extra': '', 'sid': '0', 'dir': '_i7/10' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8008/przelew.php/sfi9876', 'extra': 'account', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8008/przelew.php/sfi9876', 'extra': 'amount', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8008/przelew.php/sfi9876', 'extra': 'address', 'sid': '0', 'dir': '_i8/2' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8008/przelew.php/announcement.sfish', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8008/przelew.php/avatars.sfish.xls', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:8008/przelew.php/avatars', 'extra': '', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://localhost:8008/example.txt', 'extra': '', 'sid': '0', 'dir': '_i9/3' },
    { 'url': 'http://localhost:8008/index.html', 'extra': '', 'sid': '0', 'dir': '_i9/4' },
    { 'url': 'http://localhost:8008/test.html', 'extra': '', 'sid': '0', 'dir': '_i9/5' },
    { 'url': 'http://localhost:8008/functions.php', 'extra': '', 'sid': '0', 'dir': '_i9/6' },
    { 'url': 'http://localhost:8008/historia.php', 'extra': '', 'sid': '0', 'dir': '_i9/7' },
    { 'url': 'http://localhost:8008/logout.php', 'extra': '', 'sid': '0', 'dir': '_i9/8' },
    { 'url': 'http://localhost:8008/register.php?error=.cvsignore', 'extra': '', 'sid': '0', 'dir': '_i9/9' },
    { 'url': 'http://localhost:8008/server-status', 'extra': '', 'sid': '0', 'dir': '_i9/10' },
    { 'url': 'http://localhost:8008/test.php', 'extra': '', 'sid': '0', 'dir': '_i9/11' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8008/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost:8008/sfi9876.phps', 'extra': '', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://localhost:8008/confirm.php/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://localhost:8008/przelew.php/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/3' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8008/', 'extra': 'Apache/2.4.18 (Ubuntu)', 'sid': '0', 'dir': '_i11/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8008/register.php', 'extra': 'PHPSESSID', 'sid': '0', 'dir': '_i12/0' } ]
  }
];

