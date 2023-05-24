import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent {

  protected bridgeSections:any = [
    {
      id: 1,
      title: 'Section Prix',
      name: 'price',
      description: 'Colonnes de la section prix des données articles dans la base Divalto',
      viewRequest: false,
      viewAssigns: false,
      assigns: [
        {
          divalto: "art.\"ART_ID",
          bridge: "art_id",
          presta: "",
          description: "Identifiant d'un article dans la table Article"
        },
        {
          divalto: "sart.\"SART_ID",
          bridge: "sart_id",
          presta: [""],
          description: "Identifiant d'un article dans la table sous articles"
        },
        {
          divalto: "sart.\"REF",
          bridge: "product_reference",
          presta: ["_product_attribute.reference", "_product_attribute_shop.reference"],
          description: "R�f�rence d'un article dans la table des sous-article"
        },
        {
          divalto: "art.\"REFAMR",
          bridge: "selling_discount_class",
          presta: [""],
          description: ""
        },
        {
          divalto: "art.\"TVAART",
          bridge: "selling_vat_code",
          presta: [""],
          description: ""
        },
        {
          divalto: "art.\"TVAARTA",
          bridge: "purchase_vat_code",
          presta: [""],
          description: ""
        },
        {
          divalto: "art.\"VENUN",
          bridge: "selling_unit",
          presta: [""],
          description: ""
        },
        {
          divalto: "ttcv.\"PRIXUNITAIRE",
          bridge: "selling_taxes",
          presta: ["_product_attribute.ecotax"],
          description: ""
        },
        {
          divalto: "ttcv.\"LIBELLE",
          bridge: "selling_taxes_name",
          presta: "",
          description: ""
        },
        {
          divalto: "art.\"MITARIFCOEF",
          bridge: "selling_calc_coef",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfo.\"TADT",
          bridge: "purchase_price_start_date",
          presta: "",
          description: ""
        },
        {
          divalto: "tfo.\"PPAR",
          bridge: "purchase_multiple_price",
          presta: "",
          description: ""
        },
        {
          divalto: "tfo.\"HSDT",
          bridge: "purchase_price_end_date",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfo.\"PUBTYP",
          bridge: "purchase_price_type",
          presta: "",
          description: ""
        },
        {
          divalto: "tfo.\"PA",
          bridge: "purchase_price",
          presta: ["_product_attribute.wholesale_price"],
          description: ""
        },
        {
          divalto: "tfo.\"PUBUN",
          bridge: "purchase_unit_price",
          presta: "",
          description: ""
        },
        {
          divalto: "tfore.\"REM_0001",
          bridge: "supplier_discount_0001",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfore.\"REMTYP_0001",
          bridge: "supplier_discount_type_0001",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfore.\"REM_0002",
          bridge: "supplier_discount_0002",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfore.\"REMTYP_0002",
          bridge: "supplier_discount_type_0002",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfore.\"REM_0003",
          bridge: "supplier_discount_0003",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfore.\"REMTYP_0003",
          bridge: "supplier_discount_type_0003",
          presta: [""],
          description: ""
        },
        {
          divalto: "tfore.\"REMCOD",
          bridge: "supplier_discount_code",
          presta: [""],
          description: ""
        },
        {
          divalto: "tar.\"TACOD",
          bridge: "selling_price_code",
          presta: [""],
          description: ""
        },
        {
          divalto: "tar.\"TADT",
          bridge: "selling_price_start_date",
          presta: [""],
          description: ""
        },
        {
          divalto: "tar.\"HSDT",
          bridge: "selling_price_end_date",
          presta: ["_product_attribute.available_date"],
          description: ""
        },
        {
          divalto: "tar.\"PUBTYP",
          bridge: "selling_price_type",
          presta: "",
          description: ""
        },
        {
          divalto: "tar.\"HTCOD",
          bridge: "selling_taxe_price_type_rule",
          presta: [""],
          description: ""
        },
        {
          divalto: "tar.\"PUB",
          bridge: "selling_price_te",
          presta: ["_product_attribute.price"],
          description: ""
        },
        {
          divalto: "tar.\"PUBUN",
          bridge: "selling_price_unit",
          presta: [""],
          description: ""
        },
        {
          divalto: "tar.\"PPAR",
          bridge: "selling_price_multiple",
          presta: [""],
          description: ""
        }
      ],
      requestDivalto: `SELECT DISTINCT
      max(art."ART_ID") as art_id,
      max(sart."SART_ID") as sart_id,
      max(sart."REF") as product_reference,
      max(art."REFAMR") as selling_discount_class,
      max(art."TVAART") as selling_vat_code,
      max(art."TVAARTA") as purchase_vat_code,
      max(art."VENUN") as selling_unit,
      max(ttcv."PRIXUNITAIRE") as selling_taxes,
      max(ttcv."LIBELLE") as selling_taxes_name,
      max(art."MITARIFCOEF") as selling_calc_coef,
      max(tfo."TADT") as purchase_price_start_date,
      max(tfo."PPAR") as purchase_multiple_price,
      max(tfo."HSDT") as purchase_price_end_date,
      max(tfo."PUBTYP") as purchase_price_type,
      max(tfo."PA") as purchase_price,
      max(tfo."PUBUN") as purchase_unit_price,
      max(tfore."REM_0001") as supplier_discount_0001,
      max(tfore."REMTYP_0001") as supplier_discount_type_0001,
      max(tfore."REM_0002") as supplier_discount_0002,
      max(tfore."REMTYP_0002") as supplier_discount_type_0002,
      max(tfore."REM_0003") as supplier_discount_0003,
      max(tfore."REMTYP_0003") as supplier_discount_type_0003,
      max(tfore."REMCOD") as supplier_discount_code,
      max(tar."TACOD") as selling_price_code,
      max(tar."TADT") as selling_price_start_date,
      max(tar."HSDT") as selling_price_end_date,
      max(tar."PUBTYP") as selling_price_type,
      max(tar."HTCOD") as selling_taxe_price_type_rule,
      max(tar."PUB") as selling_price_te,
      max(tar."PUBUN") as selling_price_unit,
      max(tar."PPAR") as selling_price_multiple
  FROM
      dbo.SART as sart
  LEFT JOIN
      dbo.ART as art
  ON
      sart."REF" = art."REF"
  LEFT JOIN
      dbo."RSO" as rso
  ON
      rso."REF" = sart."REF"
  LEFT JOIN
      dbo."RFO" as rfo
  ON
      rfo."REF" = sart."REF"
  LEFT JOIN
      dbo."FOU" as fou
  ON
      fou."TIERS" = rso."TIERS"
  LEFT JOIN
      dbo."TAXE_COMPLEMENTAIRE_ARTICLE_V" as tcav
  ON
      tcav."REFERENCE" = sart."REF"
  LEFT JOIN
      dbo."TABLE_TAXE_COMPLEMENTAIRE_V" as ttcv
  ON
      tcav."CODETAXECOMPLEMENTAIRE" = ttcv."CODE_TAXE_COMPLEMENTAIRE"
  LEFT JOIN
      dbo."TFO" as tfo
  ON
      tfo."REF" = sart."REF"
  LEFT JOIN
      dbo."TFORE" as tfore
  ON
      tfore."REF" = sart."REF"
  LEFT JOIN
      dbo."TAR" as tar
  ON
      tar."REF" = sart."REF"
  WHERE
      tar."TACOD" LIKE '%HT%'
  GROUP BY
      tar."REF"`,
      requestBridge: `INSERT INTO diva_product_price(
        art_id,
        sart_id,
        product_reference,
        selling_discount_class,
        selling_vat_code,
        purchase_vat_code,
        selling_unit,
        selling_taxes,
        selling_taxes_name,
        selling_calc_coef,
        purchase_price_start_date,
        purchase_multiple_price,
        purchase_price_end_date,
        purchase_price_type,
        purchase_price,
        purchase_unit_price,
        supplier_discount_0001,
        supplier_discount_type_0001,
        supplier_discount_0002,
        supplier_discount_type_0002,
        supplier_discount_0003,
        supplier_discount_type_0003,
        supplier_discount_code,
        selling_price_code,
        selling_price_start_date,
        selling_price_end_date,
        selling_price_type,
        selling_taxe_price_type_rule,
        selling_price_te,
        selling_price_unit,
        selling_price_multiple) VALUES ('
        {row.art_id.value}',
        '{row.sart_id.value}',
        '{row.product_reference.value}',
        '{row.selling_discount_class.value}',
        '{row.selling_vat_code.value}',
        '{row.purchase_vat_code.value}',
        '{row.selling_unit.value}',
        '{row.selling_taxes.value}',
        '{row.selling_taxes_name.value}',
        '{row.selling_calc_coef.value}',
        '{row.purchase_price_start_date.value}',
        '{row.purchase_multiple_price.value}',
        '{row.purchase_price_end_date.value}',
        '{row.purchase_price_type.value}',
        '{row.purchase_price.value}',
        '{row.purchase_unit_price.value}',
        '{row.supplier_discount_0001.value}',
        '{row.supplier_discount_type_0001.value}',
        '{row.supplier_discount_0002.value}',
        '{row.supplier_discount_type_0002.value}',
        '{row.supplier_discount_0003.value}',
        '{row.supplier_discount_type_0003.value}',
        '{row.supplier_discount_code.value}',
        '{row.selling_price_code.value}',
        '{row.selling_price_start_date.value}',
        '{row.selling_price_end_date.value}',
        '{row.selling_price_type.value}',
        '{row.selling_taxe_price_type_rule.value}',
        '{row.selling_price_te.value}',
        '{row.selling_price_unit.value}',
        '{row.selling_price_multiple.value}')`,
      requestPrestashop: ``
    },
    {
      id: 2,
      title: 'Section Publique',
      name: 'public',
      description: 'Colonnes de la section publique des données articles dans la base Divalto',
      viewRequest: false,
      requestDivalto: `SELECT DISTINCT
      max(art."ART_ID") as art_id,
      max(sart."SART_ID") as sart_id,
      max(sart."REF") as product_reference,
      max(art."REFAMR") as selling_discount_class,
      max(art."TVAART") as selling_vat_code,
      max(art."TVAARTA") as purchase_vat_code,
      max(art."VENUN") as selling_unit,
      max(ttcv."PRIXUNITAIRE") as selling_taxes,
      max(ttcv."LIBELLE") as selling_taxes_name,
      max(art."MITARIFCOEF") as selling_calc_coef,
      max(tfo."TADT") as purchase_price_start_date,
      max(tfo."PPAR") as purchase_multiple_price,
      max(tfo."HSDT") as purchase_price_end_date,
      max(tfo."PUBTYP") as purchase_price_type,
      max(tfo."PA") as purchase_price,
      max(tfo."PUBUN") as purchase_unit_price,
      max(tfore."REM_0001") as supplier_discount_0001,
      max(tfore."REMTYP_0001") as supplier_discount_type_0001,
      max(tfore."REM_0002") as supplier_discount_0002,
      max(tfore."REMTYP_0002") as supplier_discount_type_0002,
      max(tfore."REM_0003") as supplier_discount_0003,
      max(tfore."REMTYP_0003") as supplier_discount_type_0003,
      max(tfore."REMCOD") as supplier_discount_code,
      max(tar."TACOD") as selling_price_code,
      max(tar."TADT") as selling_price_start_date,
      max(tar."HSDT") as selling_price_end_date,
      max(tar."PUBTYP") as selling_price_type,
      max(tar."HTCOD") as selling_taxe_price_type_rule,
      max(tar."PUB") as selling_price_te,
      max(tar."PUBUN") as selling_price_unit,
      max(tar."PPAR") as selling_price_multiple
  FROM
      dbo.SART as sart
  LEFT JOIN
      dbo.ART as art
  ON
      sart."REF" = art."REF"
  LEFT JOIN
      dbo."RSO" as rso
  ON
      rso."REF" = sart."REF"
  LEFT JOIN
      dbo."RFO" as rfo
  ON
      rfo."REF" = sart."REF"
  LEFT JOIN
      dbo."FOU" as fou
  ON
      fou."TIERS" = rso."TIERS"
  LEFT JOIN
      dbo."TAXE_COMPLEMENTAIRE_ARTICLE_V" as tcav
  ON
      tcav."REFERENCE" = sart."REF"
  LEFT JOIN
      dbo."TABLE_TAXE_COMPLEMENTAIRE_V" as ttcv
  ON
      tcav."CODETAXECOMPLEMENTAIRE" = ttcv."CODE_TAXE_COMPLEMENTAIRE"
  LEFT JOIN
      dbo."TFO" as tfo
  ON
      tfo."REF" = sart."REF"
  LEFT JOIN
      dbo."TFORE" as tfore
  ON
      tfore."REF" = sart."REF"
  LEFT JOIN
      dbo."TAR" as tar
  ON
      tar."REF" = sart."REF"
  WHERE
      tar."TACOD" LIKE '%HT%'
  GROUP BY
      tar."REF"`,
      requestBridge: `INSERT INTO diva_product_price(
        art_id,
        sart_id,
        product_reference,
        selling_discount_class,
        selling_vat_code,
        purchase_vat_code,
        selling_unit,
        selling_taxes,
        selling_taxes_name,
        selling_calc_coef,
        purchase_price_start_date,
        purchase_multiple_price,
        purchase_price_end_date,
        purchase_price_type,
        purchase_price,
        purchase_unit_price,
        supplier_discount_0001,
        supplier_discount_type_0001,
        supplier_discount_0002,
        supplier_discount_type_0002,
        supplier_discount_0003,
        supplier_discount_type_0003,
        supplier_discount_code,
        selling_price_code,
        selling_price_start_date,
        selling_price_end_date,
        selling_price_type,
        selling_taxe_price_type_rule,
        selling_price_te,
        selling_price_unit,
        selling_price_multiple) VALUES ('
        {row.art_id.value}',
        '{row.sart_id.value}',
        '{row.product_reference.value}',
        '{row.selling_discount_class.value}',
        '{row.selling_vat_code.value}',
        '{row.purchase_vat_code.value}',
        '{row.selling_unit.value}',
        '{row.selling_taxes.value}',
        '{row.selling_taxes_name.value}',
        '{row.selling_calc_coef.value}',
        '{row.purchase_price_start_date.value}',
        '{row.purchase_multiple_price.value}',
        '{row.purchase_price_end_date.value}',
        '{row.purchase_price_type.value}',
        '{row.purchase_price.value}',
        '{row.purchase_unit_price.value}',
        '{row.supplier_discount_0001.value}',
        '{row.supplier_discount_type_0001.value}',
        '{row.supplier_discount_0002.value}',
        '{row.supplier_discount_type_0002.value}',
        '{row.supplier_discount_0003.value}',
        '{row.supplier_discount_type_0003.value}',
        '{row.supplier_discount_code.value}',
        '{row.selling_price_code.value}',
        '{row.selling_price_start_date.value}',
        '{row.selling_price_end_date.value}',
        '{row.selling_price_type.value}',
        '{row.selling_taxe_price_type_rule.value}',
        '{row.selling_price_te.value}',
        '{row.selling_price_unit.value}',
        '{row.selling_price_multiple.value}')`,
      requestPrestashop: ``
    },
    {
      id: 3,
      title: 'Section Stock',
      name: 'stock',
      description: 'Colonnes de la section stock des données articles dans la base Divalto',
      viewRequest: false,
      requestDivalto: `SELECT DISTINCT
      max(art."ART_ID") as art_id,
      max(sart."SART_ID") as sart_id,
      max(sart."REF") as product_reference,
      max(art."REFAMR") as selling_discount_class,
      max(art."TVAART") as selling_vat_code,
      max(art."TVAARTA") as purchase_vat_code,
      max(art."VENUN") as selling_unit,
      max(ttcv."PRIXUNITAIRE") as selling_taxes,
      max(ttcv."LIBELLE") as selling_taxes_name,
      max(art."MITARIFCOEF") as selling_calc_coef,
      max(tfo."TADT") as purchase_price_start_date,
      max(tfo."PPAR") as purchase_multiple_price,
      max(tfo."HSDT") as purchase_price_end_date,
      max(tfo."PUBTYP") as purchase_price_type,
      max(tfo."PA") as purchase_price,
      max(tfo."PUBUN") as purchase_unit_price,
      max(tfore."REM_0001") as supplier_discount_0001,
      max(tfore."REMTYP_0001") as supplier_discount_type_0001,
      max(tfore."REM_0002") as supplier_discount_0002,
      max(tfore."REMTYP_0002") as supplier_discount_type_0002,
      max(tfore."REM_0003") as supplier_discount_0003,
      max(tfore."REMTYP_0003") as supplier_discount_type_0003,
      max(tfore."REMCOD") as supplier_discount_code,
      max(tar."TACOD") as selling_price_code,
      max(tar."TADT") as selling_price_start_date,
      max(tar."HSDT") as selling_price_end_date,
      max(tar."PUBTYP") as selling_price_type,
      max(tar."HTCOD") as selling_taxe_price_type_rule,
      max(tar."PUB") as selling_price_te,
      max(tar."PUBUN") as selling_price_unit,
      max(tar."PPAR") as selling_price_multiple
  FROM
      dbo.SART as sart
  LEFT JOIN
      dbo.ART as art
  ON
      sart."REF" = art."REF"
  LEFT JOIN
      dbo."RSO" as rso
  ON
      rso."REF" = sart."REF"
  LEFT JOIN
      dbo."RFO" as rfo
  ON
      rfo."REF" = sart."REF"
  LEFT JOIN
      dbo."FOU" as fou
  ON
      fou."TIERS" = rso."TIERS"
  LEFT JOIN
      dbo."TAXE_COMPLEMENTAIRE_ARTICLE_V" as tcav
  ON
      tcav."REFERENCE" = sart."REF"
  LEFT JOIN
      dbo."TABLE_TAXE_COMPLEMENTAIRE_V" as ttcv
  ON
      tcav."CODETAXECOMPLEMENTAIRE" = ttcv."CODE_TAXE_COMPLEMENTAIRE"
  LEFT JOIN
      dbo."TFO" as tfo
  ON
      tfo."REF" = sart."REF"
  LEFT JOIN
      dbo."TFORE" as tfore
  ON
      tfore."REF" = sart."REF"
  LEFT JOIN
      dbo."TAR" as tar
  ON
      tar."REF" = sart."REF"
  WHERE
      tar."TACOD" LIKE '%HT%'
  GROUP BY
      tar."REF"`,
      requestBridge: `INSERT INTO diva_product_price(
        art_id,
        sart_id,
        product_reference,
        selling_discount_class,
        selling_vat_code,
        purchase_vat_code,
        selling_unit,
        selling_taxes,
        selling_taxes_name,
        selling_calc_coef,
        purchase_price_start_date,
        purchase_multiple_price,
        purchase_price_end_date,
        purchase_price_type,
        purchase_price,
        purchase_unit_price,
        supplier_discount_0001,
        supplier_discount_type_0001,
        supplier_discount_0002,
        supplier_discount_type_0002,
        supplier_discount_0003,
        supplier_discount_type_0003,
        supplier_discount_code,
        selling_price_code,
        selling_price_start_date,
        selling_price_end_date,
        selling_price_type,
        selling_taxe_price_type_rule,
        selling_price_te,
        selling_price_unit,
        selling_price_multiple) VALUES ('
        {row.art_id.value}',
        '{row.sart_id.value}',
        '{row.product_reference.value}',
        '{row.selling_discount_class.value}',
        '{row.selling_vat_code.value}',
        '{row.purchase_vat_code.value}',
        '{row.selling_unit.value}',
        '{row.selling_taxes.value}',
        '{row.selling_taxes_name.value}',
        '{row.selling_calc_coef.value}',
        '{row.purchase_price_start_date.value}',
        '{row.purchase_multiple_price.value}',
        '{row.purchase_price_end_date.value}',
        '{row.purchase_price_type.value}',
        '{row.purchase_price.value}',
        '{row.purchase_unit_price.value}',
        '{row.supplier_discount_0001.value}',
        '{row.supplier_discount_type_0001.value}',
        '{row.supplier_discount_0002.value}',
        '{row.supplier_discount_type_0002.value}',
        '{row.supplier_discount_0003.value}',
        '{row.supplier_discount_type_0003.value}',
        '{row.supplier_discount_code.value}',
        '{row.selling_price_code.value}',
        '{row.selling_price_start_date.value}',
        '{row.selling_price_end_date.value}',
        '{row.selling_price_type.value}',
        '{row.selling_taxe_price_type_rule.value}',
        '{row.selling_price_te.value}',
        '{row.selling_price_unit.value}',
        '{row.selling_price_multiple.value}')`,
      requestPrestashop: ``
    },
    {
      id: 4,
      title: 'Section Admin',
      name: 'admin',
      description: 'Colonnes de la section administratif des données articles dans la base Divalto',
      viewRequest: false,
      requestDivalto: `SELECT DISTINCT
      max(art."ART_ID") as art_id,
      max(sart."SART_ID") as sart_id,
      max(sart."REF") as product_reference,
      max(art."REFAMR") as selling_discount_class,
      max(art."TVAART") as selling_vat_code,
      max(art."TVAARTA") as purchase_vat_code,
      max(art."VENUN") as selling_unit,
      max(ttcv."PRIXUNITAIRE") as selling_taxes,
      max(ttcv."LIBELLE") as selling_taxes_name,
      max(art."MITARIFCOEF") as selling_calc_coef,
      max(tfo."TADT") as purchase_price_start_date,
      max(tfo."PPAR") as purchase_multiple_price,
      max(tfo."HSDT") as purchase_price_end_date,
      max(tfo."PUBTYP") as purchase_price_type,
      max(tfo."PA") as purchase_price,
      max(tfo."PUBUN") as purchase_unit_price,
      max(tfore."REM_0001") as supplier_discount_0001,
      max(tfore."REMTYP_0001") as supplier_discount_type_0001,
      max(tfore."REM_0002") as supplier_discount_0002,
      max(tfore."REMTYP_0002") as supplier_discount_type_0002,
      max(tfore."REM_0003") as supplier_discount_0003,
      max(tfore."REMTYP_0003") as supplier_discount_type_0003,
      max(tfore."REMCOD") as supplier_discount_code,
      max(tar."TACOD") as selling_price_code,
      max(tar."TADT") as selling_price_start_date,
      max(tar."HSDT") as selling_price_end_date,
      max(tar."PUBTYP") as selling_price_type,
      max(tar."HTCOD") as selling_taxe_price_type_rule,
      max(tar."PUB") as selling_price_te,
      max(tar."PUBUN") as selling_price_unit,
      max(tar."PPAR") as selling_price_multiple
  FROM
      dbo.SART as sart
  LEFT JOIN
      dbo.ART as art
  ON
      sart."REF" = art."REF"
  LEFT JOIN
      dbo."RSO" as rso
  ON
      rso."REF" = sart."REF"
  LEFT JOIN
      dbo."RFO" as rfo
  ON
      rfo."REF" = sart."REF"
  LEFT JOIN
      dbo."FOU" as fou
  ON
      fou."TIERS" = rso."TIERS"
  LEFT JOIN
      dbo."TAXE_COMPLEMENTAIRE_ARTICLE_V" as tcav
  ON
      tcav."REFERENCE" = sart."REF"
  LEFT JOIN
      dbo."TABLE_TAXE_COMPLEMENTAIRE_V" as ttcv
  ON
      tcav."CODETAXECOMPLEMENTAIRE" = ttcv."CODE_TAXE_COMPLEMENTAIRE"
  LEFT JOIN
      dbo."TFO" as tfo
  ON
      tfo."REF" = sart."REF"
  LEFT JOIN
      dbo."TFORE" as tfore
  ON
      tfore."REF" = sart."REF"
  LEFT JOIN
      dbo."TAR" as tar
  ON
      tar."REF" = sart."REF"
  WHERE
      tar."TACOD" LIKE '%HT%'
  GROUP BY
      tar."REF"`,
      requestBridge: `INSERT INTO diva_product_price(
        art_id,
        sart_id,
        product_reference,
        selling_discount_class,
        selling_vat_code,
        purchase_vat_code,
        selling_unit,
        selling_taxes,
        selling_taxes_name,
        selling_calc_coef,
        purchase_price_start_date,
        purchase_multiple_price,
        purchase_price_end_date,
        purchase_price_type,
        purchase_price,
        purchase_unit_price,
        supplier_discount_0001,
        supplier_discount_type_0001,
        supplier_discount_0002,
        supplier_discount_type_0002,
        supplier_discount_0003,
        supplier_discount_type_0003,
        supplier_discount_code,
        selling_price_code,
        selling_price_start_date,
        selling_price_end_date,
        selling_price_type,
        selling_taxe_price_type_rule,
        selling_price_te,
        selling_price_unit,
        selling_price_multiple) VALUES ('
        {row.art_id.value}',
        '{row.sart_id.value}',
        '{row.product_reference.value}',
        '{row.selling_discount_class.value}',
        '{row.selling_vat_code.value}',
        '{row.purchase_vat_code.value}',
        '{row.selling_unit.value}',
        '{row.selling_taxes.value}',
        '{row.selling_taxes_name.value}',
        '{row.selling_calc_coef.value}',
        '{row.purchase_price_start_date.value}',
        '{row.purchase_multiple_price.value}',
        '{row.purchase_price_end_date.value}',
        '{row.purchase_price_type.value}',
        '{row.purchase_price.value}',
        '{row.purchase_unit_price.value}',
        '{row.supplier_discount_0001.value}',
        '{row.supplier_discount_type_0001.value}',
        '{row.supplier_discount_0002.value}',
        '{row.supplier_discount_type_0002.value}',
        '{row.supplier_discount_0003.value}',
        '{row.supplier_discount_type_0003.value}',
        '{row.supplier_discount_code.value}',
        '{row.selling_price_code.value}',
        '{row.selling_price_start_date.value}',
        '{row.selling_price_end_date.value}',
        '{row.selling_price_type.value}',
        '{row.selling_taxe_price_type_rule.value}',
        '{row.selling_price_te.value}',
        '{row.selling_price_unit.value}',
        '{row.selling_price_multiple.value}')`,
      requestPrestashop: ``
    },
    {
      id: 5,
      title: 'Section Ref',
      name: 'ref',
      description: 'Colonnes de la section des références des données articles dans la base Divalto',
      viewRequest: false,
      requestDivalto: `SELECT DISTINCT
      max(art."ART_ID") as art_id,
      max(sart."SART_ID") as sart_id,
      max(sart."REF") as product_reference,
      max(art."REFAMR") as selling_discount_class,
      max(art."TVAART") as selling_vat_code,
      max(art."TVAARTA") as purchase_vat_code,
      max(art."VENUN") as selling_unit,
      max(ttcv."PRIXUNITAIRE") as selling_taxes,
      max(ttcv."LIBELLE") as selling_taxes_name,
      max(art."MITARIFCOEF") as selling_calc_coef,
      max(tfo."TADT") as purchase_price_start_date,
      max(tfo."PPAR") as purchase_multiple_price,
      max(tfo."HSDT") as purchase_price_end_date,
      max(tfo."PUBTYP") as purchase_price_type,
      max(tfo."PA") as purchase_price,
      max(tfo."PUBUN") as purchase_unit_price,
      max(tfore."REM_0001") as supplier_discount_0001,
      max(tfore."REMTYP_0001") as supplier_discount_type_0001,
      max(tfore."REM_0002") as supplier_discount_0002,
      max(tfore."REMTYP_0002") as supplier_discount_type_0002,
      max(tfore."REM_0003") as supplier_discount_0003,
      max(tfore."REMTYP_0003") as supplier_discount_type_0003,
      max(tfore."REMCOD") as supplier_discount_code,
      max(tar."TACOD") as selling_price_code,
      max(tar."TADT") as selling_price_start_date,
      max(tar."HSDT") as selling_price_end_date,
      max(tar."PUBTYP") as selling_price_type,
      max(tar."HTCOD") as selling_taxe_price_type_rule,
      max(tar."PUB") as selling_price_te,
      max(tar."PUBUN") as selling_price_unit,
      max(tar."PPAR") as selling_price_multiple
  FROM
      dbo.SART as sart
  LEFT JOIN
      dbo.ART as art
  ON
      sart."REF" = art."REF"
  LEFT JOIN
      dbo."RSO" as rso
  ON
      rso."REF" = sart."REF"
  LEFT JOIN
      dbo."RFO" as rfo
  ON
      rfo."REF" = sart."REF"
  LEFT JOIN
      dbo."FOU" as fou
  ON
      fou."TIERS" = rso."TIERS"
  LEFT JOIN
      dbo."TAXE_COMPLEMENTAIRE_ARTICLE_V" as tcav
  ON
      tcav."REFERENCE" = sart."REF"
  LEFT JOIN
      dbo."TABLE_TAXE_COMPLEMENTAIRE_V" as ttcv
  ON
      tcav."CODETAXECOMPLEMENTAIRE" = ttcv."CODE_TAXE_COMPLEMENTAIRE"
  LEFT JOIN
      dbo."TFO" as tfo
  ON
      tfo."REF" = sart."REF"
  LEFT JOIN
      dbo."TFORE" as tfore
  ON
      tfore."REF" = sart."REF"
  LEFT JOIN
      dbo."TAR" as tar
  ON
      tar."REF" = sart."REF"
  WHERE
      tar."TACOD" LIKE '%HT%'
  GROUP BY
      tar."REF"`,
      requestBridge: `INSERT INTO diva_product_price(
        art_id,
        sart_id,
        product_reference,
        selling_discount_class,
        selling_vat_code,
        purchase_vat_code,
        selling_unit,
        selling_taxes,
        selling_taxes_name,
        selling_calc_coef,
        purchase_price_start_date,
        purchase_multiple_price,
        purchase_price_end_date,
        purchase_price_type,
        purchase_price,
        purchase_unit_price,
        supplier_discount_0001,
        supplier_discount_type_0001,
        supplier_discount_0002,
        supplier_discount_type_0002,
        supplier_discount_0003,
        supplier_discount_type_0003,
        supplier_discount_code,
        selling_price_code,
        selling_price_start_date,
        selling_price_end_date,
        selling_price_type,
        selling_taxe_price_type_rule,
        selling_price_te,
        selling_price_unit,
        selling_price_multiple) VALUES ('
        {row.art_id.value}',
        '{row.sart_id.value}',
        '{row.product_reference.value}',
        '{row.selling_discount_class.value}',
        '{row.selling_vat_code.value}',
        '{row.purchase_vat_code.value}',
        '{row.selling_unit.value}',
        '{row.selling_taxes.value}',
        '{row.selling_taxes_name.value}',
        '{row.selling_calc_coef.value}',
        '{row.purchase_price_start_date.value}',
        '{row.purchase_multiple_price.value}',
        '{row.purchase_price_end_date.value}',
        '{row.purchase_price_type.value}',
        '{row.purchase_price.value}',
        '{row.purchase_unit_price.value}',
        '{row.supplier_discount_0001.value}',
        '{row.supplier_discount_type_0001.value}',
        '{row.supplier_discount_0002.value}',
        '{row.supplier_discount_type_0002.value}',
        '{row.supplier_discount_0003.value}',
        '{row.supplier_discount_type_0003.value}',
        '{row.supplier_discount_code.value}',
        '{row.selling_price_code.value}',
        '{row.selling_price_start_date.value}',
        '{row.selling_price_end_date.value}',
        '{row.selling_price_type.value}',
        '{row.selling_taxe_price_type_rule.value}',
        '{row.selling_price_te.value}',
        '{row.selling_price_unit.value}',
        '{row.selling_price_multiple.value}')`,
      requestPrestashop: ``
    }
  ]

  constructor(
    private http: HttpClient,
    private as: AlertsService
  ){}


  headers = new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept" : ["application/json", "application/xml"],
    "Access-Control-Allow-Origin": "*"
  })

  updateBridge = async (section:string) => {
    this.http.post(`${environment.backEnd.cr_divalto_sync}/productToBridge`,
      {
        bridgeSection: section,
        clear: true,
        cms: true,
        envDb: 'prod'
      }, {headers: this.headers}).subscribe((v:any)=>{
        console.log('Callback update bridge data', v);
      }, (error)=>{
        this.as.error(`Erreur lors de la mise à jour passerelle`,`Une erreur est survenue lors de la mise à jour des données en base passerelle`)
        console.error(error)
      })
  }

  updateCMS = async (envDb:any) => {
    this.http.patch(`${environment.backEnd.cr_divalto_sync}/updatePresta`,
    {
       envDb: 'prod'
    }, {headers: this.headers}).subscribe((v:any)=>{
      console.log('Retour de la mise à jour article', v)
    },(error) => {
      this.as.error(`Erreur lors de la mise à jour article`,`Erreur`)
    })
  }

  getBridgePrice = async () => {
    this.http.get(`${environment.backEnd.cr_divalto_sync}/`)
  }
}
