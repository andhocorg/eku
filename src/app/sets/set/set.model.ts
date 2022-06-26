
export class dummyModel{
  id: string;
  name: string;
}
/*
export class SetModel {
  bezeichnung: string;
  kanton: string;
  stichtag: Date;
  erstellt: Date;
  aktualisiert: Date;
  mutter: ElternteilPartner; // Elternteil;
  neuerPartnerMutter: ElternteilPartner; // Person;
  vater: ElternteilPartner; // Elternteil;
  neuerPartnerVater: ElternteilPartner; // Person;
  // kinder: Person[];
  zivilstandEltern: string;
  gemeinsamerHaushaltEltern: boolean;
  // elterlicheSorge: string; nur für Entscheid relevant, nicht für Berechnung
  version: string;
  phasen: Phase[];
  ueberschuss() {
      return
  }
}


// ============= Personen

class Person {
  name: string;
  geburtstag: Date;
  einkommen: Einkommen;
  bedarfStufe1: Bedarf; // Aufwand
  bedarfStufe2: Bedarf;
  bedarfStufe3: Bedarf;
  vermoegen: Vermoegen;
  schulden: Schulden;



  kalkVermoegenTotal() {
      return this.vermoegen.reduce((sum, current) => sum + current.betrag, 0);
  }

  kalkSchuldenTotal() {
      return this.schulden.reduce((sum, current) => sum + current.betrag, 0);
  }

  kalkBedarfTotal() {
      return this.bedarfStufe1.kalkGesamtbedarf() + this.bedarfStufe2.kalkGesamtbedarf() + this.bedarfStufe3.kalkGesamtbedarf();
  }

  kalkBetreuungsunterhalt() {
      return this.einkommen.kalkEinkommenTotal() - this.kalkBedarfTotal();
  }
}


class ElternteilPartner extends Person{
  kinder: Person[];
  unterhaltSonstige: UnterhaltSonstige[];

  kalkBetreuungsunterhaltKinder() {
      return this.kinder.reduce((sum, current) => sum + current.kalkBetreuungsunterhalt(), 0);
  }

  kalkUeberschuss() {
      return this.kalkBetreuungsunterhalt() + this.kalkBetreuungsunterhaltKinder();
  }
}

  class UnterhaltSonstige{
      bezeichnung: string;
      betrag: number;
  }

class Kind extends Person {
  betreuungsanteilMutter: number;
  betreuungsanteilVater: number;
  fremdbetreuung: Fremdbetreuung[];
  kindesanspruch: number;
  schulstufenwechsel: Schulstufenwechsel[];

  kalkTotalBetreuungsanteile() {
      return this.fremdbetreuung.reduce((sum, current) => sum + current.anteil, 0)
      + this.betreuungsanteilMutter + this.betreuungsanteilVater;
  }

  kalkTotalFremdbetreuungskosten() {
      return this.fremdbetreuung.reduce((sum, current) => sum + current.kosten, 0);
  }
}

class Schulstufenwechsel {
  wechseldatum: Date;

}

class Fremdbetreuung {
  bezeichnung: string;
  anteil: number;
  kosten: number;
}

class Phase {
  phasenbeginn: Date;
}

/*Einkommen Eltern
Zum Einkommen gehören das monatliche Nettoerwerbseinkommen (inkl. Anteil 13. Monatslohn, Anteil Bonus/Gratifikation und Trinkgelder), das monatliche Renteneinkommen (z.B. AHV- und IV-Renten) oder der Reingewinn bei selbständiger Erwerbstätigkeit. Bei Kindern ist hier ein allfälliger Lehrlingslohn ganz oder teilweise einzusetzen.

Zum weiteren Einkommen gehören z.B. Einkommen aus Nebenerwerb, Vermögenserträge, Beiträge Dritter oder quantifizierbare Naturalleistungen.

Fürsorge- und Sozialhilfebeiträge sowie Ergänzungsleistungen stellen kein anrechenbares Einkommen dar.*/


/* Einkommen Kinder
Das Einkommen der Kinder ist nur in dem Umfang in der Tabelle aufzuführen (z.B. Lehrlingslohn), in welchem er am Haushaltseinkommen angerechnet wird. Wird nicht das gesamte Einkommen erfasst, so ist zu prüfen, ob gewisse Bedarfspositionen im Barbedarf des Kindes wegzulassen sind (z.B. Kommunikationskosten, Hobbies, Taschengeld etc.).

Allfällige Familien- oder Kinderzulagen sind den Kindern als Einkommen anzurechnen.*/


/* NeuerPartner
Das Nettoeinkommen des neuen Partners des leistungsfähigeren Elternteils ist zu erfassen, wenn er dessen Kinder tatsächlich selbst betreut. Arbeitet der Partner 100%, braucht weder sein Einkommen noch sein Bedarf erfasst zu werden.*/

// ============= Einkommen
/*
class Einkommen {
  nettolohn: Nettolohn;
  freiwilligeLeistungenDritter: FreiwilligeLeistungenDritter;

  kalkEinkommenTotal() {
      return this.einkommen.reduce((sum, current) => sum + current.betrag, 0);
  }
}

  class Nettolohn {
      ref: string;
      positionen: Position[];
  }

  class FreiwilligeLeistungenDritter {
      ref: string;
      positionen: Position[];
  }

// ============= Bedarf

class Bedarf { // notbedarf / erweiterter bedarf
  praemienKVG: Praemie;
  praemienVVG: Praemie[];
  IVP: IVP[];
  berufsauslageFahrtkosten: number;
  berufsauslageVerpflegung: number;
  steuern
  bedarfspositionen: Bedarfsposition[];


  kalkGesamtbedarf() {
      return this.bedarfspositionen.reduce((sum, current) => sum + current.betrag, 0);
  }
}

class BedarfElternteilPartner extends Bedarf {
  kinderunterhaltAndere: UnterhaltAndere;
  ehegattenunterhaltAndere: UnterhaltAndere;

}

  class UnterhaltAndere {
      ref: string;
      positionen: Position[];
  }

class Position {
  bezeichnung: string;
  betrag: number;
}


class BedarfKind extends Bedarf {

  constructor() {

      super();
  }
}


class Praemie {
  bezeichnung: string;
  betrag: number;
}



class IVP {
  bezeichnung: string;
  betrag: number;
}

/*Richtlinien der Konferenz der Betreibungs- und Konkursbeamten der Schweiz für die Berechnung des betreibungsrechtlichen Existenzminimums; BlSchK 2009, S. 193 ff.:
CHF 1350.00 allein mit minderjährigen Kindern;
CHF 1200.00 allein;
CHF 850.00 (als Minimum) in kostensenkender Wohn-/Lebensgemeinschaft;
CHF 400.00 Kinder bis 10J.; CHF 600.00 Kinder ab 10J.*/
/*
class Bedarfsposition { // notbedarf / erweiterter bedarf
  bezeichnung: string;
  betrag: number;
}


/*class BedarfspositionKind extends Bedarfsposition {
  fremdbetreuungskosten: number;
}*/
/*Unter dieser Bedarfsposition sind die effektiv anfallenden Kosten für die Fremdbetreuung des Kindes pro Kopf aufzuführen. Wird das Kind von einem Elternteil zu 100% betreut, dürfen in der Regel keine zusätzlichen Kosten für die Fremdbetreuung angerechnet werden.

Bei Mankofällen muss allenfalls der Fremdbetreuungsbetrag manuell gekürzt werden, wenn einzelne Kinder von einem Elternteil persönlich betreut und andere Kinder vom anderen Elternteil fremdbetreut werden. Der Rechner ist so programmiert, dass Fremdbetreuungskosten als Barbedarf der Kinder immer zu 100% gedeckt sein müssen, bevor Betreuungsunterhalt als Anspruch des Kindes ausgewiesen wird . Um die Ungleichbehandlung von Kindern zu vermeiden, kann es angezeigt sein, den Fremdbetreuungsbetrag zu reduzieren, damit dem Kind, das persönlich betreut wird, ebenfalls Unterhalt (Betreuungsunterhalt) angerechnet  werden kann.*/



// ============= Kantonales Schulstufenmodell
/*
class Schulstufenmodell {
  kt: string;
  schulstufen: Schulstufe[];
}

class Schulstufe {
  bezeichnung: string;
  // info: string;
  alter: number;
  betreuungspensum: number;
}


/*
K = [
  K1 2.3.2000
  K2 4.3.1998
]

Startdatum 1.4.2004

loop K
  Startdatum - K1 = alterStart


Startalter



*/
