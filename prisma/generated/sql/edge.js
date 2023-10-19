
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  vendor_product_code: 'vendor_product_code',
  product_code: 'product_code',
  short_description: 'short_description',
  long_description: 'long_description',
  vendor_code: 'vendor_code',
  vendor_name: 'vendor_name',
  category_code: 'category_code',
  category_name: 'category_name',
  is_renewable: 'is_renewable',
  is_intra_relevant: 'is_intra_relevant',
  is_serialized: 'is_serialized',
  duration: 'duration',
  maintenance_category: 'maintenance_category',
  eol_date: 'eol_date',
  eos_date: 'eos_date',
  last_order_date: 'last_order_date',
  comment: 'comment',
  status: 'status'
};

exports.Prisma.Product_standard_list_priceScalarFieldEnum = {
  id: 'id',
  product_code: 'product_code',
  vendor_product_code: 'vendor_product_code',
  status: 'status',
  currency_code: 'currency_code',
  list_price: 'list_price',
  price_book_date: 'price_book_date',
  alternative_price_1_tag: 'alternative_price_1_tag',
  alternative_price_1: 'alternative_price_1',
  alternative_price_2_tag: 'alternative_price_2_tag',
  alternative_price_2: 'alternative_price_2',
  alternative_price_3_tag: 'alternative_price_3_tag',
  alternative_price_3: 'alternative_price_3',
  alternative_price_4_tag: 'alternative_price_4_tag',
  alternative_price_4: 'alternative_price_4'
};

exports.Prisma.Product_shipment_informationScalarFieldEnum = {
  id: 'id',
  product_code: 'product_code',
  vendor_product_code: 'vendor_product_code',
  status: 'status',
  intra_code: 'intra_code',
  country_of_origin: 'country_of_origin',
  ushts_code: 'ushts_code',
  useccn_number: 'useccn_number',
  packaged_weight_kg: 'packaged_weight_kg',
  packaged_width_mm: 'packaged_width_mm',
  packaged_length_mm: 'packaged_length_mm',
  packaged_height_mm: 'packaged_height_mm',
  deliverable: 'deliverable'
};

exports.Prisma.Product_vendor_product_informationScalarFieldEnum = {
  id: 'id',
  product_code: 'product_code',
  vendor_product_code: 'vendor_product_code',
  status: 'status',
  vendor_product_category: 'vendor_product_category',
  vendor_product_family: 'vendor_product_family',
  vendor_product_line: 'vendor_product_line',
  vendor_product_type: 'vendor_product_type',
  vendor_material_type: 'vendor_material_type'
};

exports.Prisma.Master_data_vendorsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  default_maintenance_category: 'default_maintenance_category'
};

exports.Prisma.Master_data_ushts_codesScalarFieldEnum = {
  id: 'id',
  description: 'description'
};

exports.Prisma.Master_data_useccn_numbersScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description'
};

exports.Prisma.Master_data_intrastat_codesScalarFieldEnum = {
  id: 'id',
  description_de: 'description_de',
  description_en: 'description_en',
  supplemantary_unit: 'supplemantary_unit',
  effective_date: 'effective_date',
  expired_date: 'expired_date',
  predecessor: 'predecessor'
};

exports.Prisma.Master_data_erp_product_categoryScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  is_renewable: 'is_renewable',
  is_intra_relevant: 'is_intra_relevant'
};

exports.Prisma.Master_data_deliverablesScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description'
};

exports.Prisma.Admin_sheet_namesScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  sheet_name: 'sheet_name',
  active: 'active',
  currency_id: 'currency_id',
  is_exact: 'is_exact'
};

exports.Prisma.Admin_sheet_configScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  sheet_id: 'sheet_id',
  start_column: 'start_column',
  end_column: 'end_column',
  start_row: 'start_row',
  end_row: 'end_row'
};

exports.Prisma.Admin_attribute_lookupScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  sheet_id: 'sheet_id',
  sql_name: 'sql_name',
  excel_name: 'excel_name',
  is_mandatory: 'is_mandatory'
};

exports.Prisma.Jun_mistScalarFieldEnum = {
  id: 'id',
  change_type: 'change_type',
  product_category: 'product_category',
  product_family: 'product_family',
  product_line: 'product_line',
  product_number: 'product_number',
  product_type: 'product_type',
  product_compatibility: 'product_compatibility',
  material_type: 'material_type',
  service_type: 'service_type',
  long_description: 'long_description',
  short_description: 'short_description',
  product_list_price: 'product_list_price',
  service_price_cat_1: 'service_price_cat_1',
  service_price_cat_2: 'service_price_cat_2',
  service_price_cat_3: 'service_price_cat_3',
  service_price_cat_4: 'service_price_cat_4',
  discountable: 'discountable',
  stockable: 'stockable',
  material_status: 'material_status',
  partner_certification_level: 'partner_certification_level',
  partner_product_specialization: 'partner_product_specialization',
  last_order_date: 'last_order_date',
  eol_replacement: 'eol_replacement',
  serialized: 'serialized',
  country_of_origin: 'country_of_origin',
  ccat: 'ccat',
  us_eccn: 'us_eccn',
  us_hts: 'us_hts',
  packaged_gross_weight_lbs: 'packaged_gross_weight_lbs',
  packaged_height_in: 'packaged_height_in',
  packaged_width_in: 'packaged_width_in',
  packaged_length_in: 'packaged_length_in',
  price_book_date: 'price_book_date',
  ordering_note: 'ordering_note',
  user_email: 'user_email'
};

exports.Prisma.Jun_price_listScalarFieldEnum = {
  id: 'id',
  change_type: 'change_type',
  product_category: 'product_category',
  product_family: 'product_family',
  product_line: 'product_line',
  product_number: 'product_number',
  product_type: 'product_type',
  product_compatibility: 'product_compatibility',
  material_type: 'material_type',
  service_type: 'service_type',
  long_description: 'long_description',
  short_description: 'short_description',
  product_list_price: 'product_list_price',
  service_price_cat_1: 'service_price_cat_1',
  service_price_cat_2: 'service_price_cat_2',
  service_price_cat_3: 'service_price_cat_3',
  service_price_cat_4: 'service_price_cat_4',
  discountable: 'discountable',
  stockable: 'stockable',
  material_status: 'material_status',
  partner_certification_level: 'partner_certification_level',
  partner_product_specialization: 'partner_product_specialization',
  last_order_date: 'last_order_date',
  eol_replacement: 'eol_replacement',
  serialized: 'serialized',
  country_of_origin: 'country_of_origin',
  ccat: 'ccat',
  us_eccn: 'us_eccn',
  us_hts: 'us_hts',
  packaged_gross_weight_lbs: 'packaged_gross_weight_lbs',
  packaged_height_in: 'packaged_height_in',
  packaged_width_in: 'packaged_width_in',
  packaged_length_in: 'packaged_length_in',
  price_book_date: 'price_book_date',
  user_email: 'user_email'
};

exports.Prisma.Jun_renewalScalarFieldEnum = {
  id: 'id',
  product_number: 'product_number',
  service_type: 'service_type',
  description: 'description',
  service_price_cat_1: 'service_price_cat_1',
  service_price_cat_2: 'service_price_cat_2',
  service_price_cat_3: 'service_price_cat_3',
  service_price_cat_4: 'service_price_cat_4',
  last_order_date: 'last_order_date',
  end_of_service_date: 'end_of_service_date',
  user_email: 'user_email'
};

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  street: 'street',
  zip: 'zip',
  country_code: 'country_code',
  default_maint_category_id: 'default_maint_category_id',
  created: 'created',
  changed: 'changed'
};

exports.Prisma.Update_open_transactionsScalarFieldEnum = {
  transaction_id: 'transaction_id',
  transaction_msg: 'transaction_msg',
  user_tag: 'user_tag',
  transaction_tag: 'transaction_tag',
  created: 'created',
  status_code: 'status_code',
  status_name: 'status_name'
};

exports.Prisma.Update_staged_field_changesScalarFieldEnum = {
  record_id: 'record_id',
  transaction_id: 'transaction_id',
  vendor_code: 'vendor_code',
  product_code: 'product_code',
  field_name: 'field_name',
  field_category: 'field_category',
  current_value: 'current_value',
  new_value: 'new_value',
  change_type: 'change_type'
};

exports.Prisma.Update_staged_recordsScalarFieldEnum = {
  record_id: 'record_id',
  transaction_id: 'transaction_id',
  is_new_product: 'is_new_product',
  vendor_code: 'vendor_code',
  vendor_id: 'vendor_id',
  product_code: 'product_code',
  product_id: 'product_id',
  long_desc: 'long_desc',
  short_desc: 'short_desc',
  product_category: 'product_category',
  product_category_id: 'product_category_id',
  product_family: 'product_family',
  product_family_id: 'product_family_id',
  product_line: 'product_line',
  product_line_id: 'product_line_id',
  product_type: 'product_type',
  product_type_id: 'product_type_id',
  material_type: 'material_type',
  material_type_id: 'material_type_id',
  erp_category: 'erp_category',
  erp_category_id: 'erp_category_id',
  erp_maintenance_category: 'erp_maintenance_category',
  erp_maintenance_category_id: 'erp_maintenance_category_id',
  currency_code: 'currency_code',
  currency_id: 'currency_id',
  list_price: 'list_price',
  alt_price_1: 'alt_price_1',
  alt_price_2: 'alt_price_2',
  alt_price_3: 'alt_price_3',
  alt_price_4: 'alt_price_4',
  price_book_date: 'price_book_date',
  is_scaleable: 'is_scaleable',
  is_serialized: 'is_serialized',
  intra_code: 'intra_code',
  us_hts_code: 'us_hts_code',
  us_eccn_code: 'us_eccn_code',
  us_eccn_code_id: 'us_eccn_code_id',
  eol_date: 'eol_date',
  eos_date: 'eos_date',
  last_order_date: 'last_order_date',
  packaged_weight_kg: 'packaged_weight_kg',
  packaged_length_mm: 'packaged_length_mm',
  packaged_width_mm: 'packaged_width_mm',
  packaged_height_mm: 'packaged_height_mm',
  duration_code: 'duration_code',
  duration_id: 'duration_id',
  deliverable_code: 'deliverable_code',
  deliverable_id: 'deliverable_id'
};

exports.Prisma.Application_field_namesScalarFieldEnum = {
  schema_id: 'schema_id',
  schema_name: 'schema_name',
  object_id: 'object_id',
  table_name: 'table_name',
  full_table_name: 'full_table_name',
  column_id: 'column_id',
  column_name: 'column_name',
  friendly_name: 'friendly_name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  products: 'products',
  product_standard_list_price: 'product_standard_list_price',
  product_shipment_information: 'product_shipment_information',
  product_vendor_product_information: 'product_vendor_product_information',
  master_data_vendors: 'master_data_vendors',
  master_data_ushts_codes: 'master_data_ushts_codes',
  master_data_useccn_numbers: 'master_data_useccn_numbers',
  master_data_intrastat_codes: 'master_data_intrastat_codes',
  master_data_erp_product_category: 'master_data_erp_product_category',
  master_data_deliverables: 'master_data_deliverables',
  admin_sheet_names: 'admin_sheet_names',
  admin_sheet_config: 'admin_sheet_config',
  admin_attribute_lookup: 'admin_attribute_lookup',
  jun_mist: 'jun_mist',
  jun_price_list: 'jun_price_list',
  jun_renewal: 'jun_renewal',
  vendor: 'vendor',
  update_open_transactions: 'update_open_transactions',
  update_staged_field_changes: 'update_staged_field_changes',
  update_staged_records: 'update_staged_records',
  application_field_names: 'application_field_names'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/mschneidermann/xantaro/test/my-app/prisma/generated/sql",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "SQLSERVER_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vZ2VuZXJhdGVkL3NxbCIKICBwcmV2aWV3RmVhdHVyZXMgPSBbIm11bHRpU2NoZW1hIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3Fsc2VydmVyIgogIHVybCAgICAgID0gZW52KCJTUUxTRVJWRVJfVVJMIikKICBzY2hlbWFzICA9IFsiYXBwIiwgImltcG9ydCIsICJkYm8iXQp9Cgptb2RlbCBwcm9kdWN0cyB7CiAgaWQgICAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZAogIHZlbmRvcl9wcm9kdWN0X2NvZGUgIFN0cmluZz8KICBwcm9kdWN0X2NvZGUgICAgICAgICBTdHJpbmc/CiAgc2hvcnRfZGVzY3JpcHRpb24gICAgU3RyaW5nPwogIGxvbmdfZGVzY3JpcHRpb24gICAgIFN0cmluZz8KICB2ZW5kb3JfY29kZSAgICAgICAgICBTdHJpbmc/CiAgdmVuZG9yX25hbWUgICAgICAgICAgU3RyaW5nPwogIGNhdGVnb3J5X2NvZGUgICAgICAgIFN0cmluZz8KICBjYXRlZ29yeV9uYW1lICAgICAgICBTdHJpbmc/CiAgaXNfcmVuZXdhYmxlICAgICAgICAgQm9vbGVhbgogIGlzX2ludHJhX3JlbGV2YW50ICAgIEJvb2xlYW4KICBpc19zZXJpYWxpemVkICAgICAgICBCb29sZWFuCiAgZHVyYXRpb24gICAgICAgICAgICAgU3RyaW5nPwogIG1haW50ZW5hbmNlX2NhdGVnb3J5IFN0cmluZz8KICBlb2xfZGF0ZSAgICAgICAgICAgICBEYXRlVGltZT8KICBlb3NfZGF0ZSAgICAgICAgICAgICBEYXRlVGltZT8KICBsYXN0X29yZGVyX2RhdGUgICAgICBEYXRlVGltZT8KICBjb21tZW50ICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgU3RyaW5nPwoKICBAQHNjaGVtYSgiYXBwIikKfQoKbW9kZWwgcHJvZHVjdF9zdGFuZGFyZF9saXN0X3ByaWNlIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkCiAgcHJvZHVjdF9jb2RlICAgICAgICAgICAgU3RyaW5nPwogIHZlbmRvcl9wcm9kdWN0X2NvZGUgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3VycmVuY3lfY29kZSAgICAgICAgICAgU3RyaW5nPwogIGxpc3RfcHJpY2UgICAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuTW9uZXkKICBwcmljZV9ib29rX2RhdGUgICAgICAgICBEYXRlVGltZT8KICBhbHRlcm5hdGl2ZV9wcmljZV8xX3RhZyBTdHJpbmc/CiAgYWx0ZXJuYXRpdmVfcHJpY2VfMSAgICAgRmxvYXQ/ICAgIEBkYi5Nb25leQogIGFsdGVybmF0aXZlX3ByaWNlXzJfdGFnIFN0cmluZz8KICBhbHRlcm5hdGl2ZV9wcmljZV8yICAgICBGbG9hdD8gICAgQGRiLk1vbmV5CiAgYWx0ZXJuYXRpdmVfcHJpY2VfM190YWcgU3RyaW5nPwogIGFsdGVybmF0aXZlX3ByaWNlXzMgICAgIEZsb2F0PyAgICBAZGIuTW9uZXkKICBhbHRlcm5hdGl2ZV9wcmljZV80X3RhZyBTdHJpbmc/CiAgYWx0ZXJuYXRpdmVfcHJpY2VfNCAgICAgRmxvYXQ/ICAgIEBkYi5Nb25leQoKICBAQHNjaGVtYSgiYXBwIikKfQoKbW9kZWwgcHJvZHVjdF9zaGlwbWVudF9pbmZvcm1hdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgICBAaWQKICBwcm9kdWN0X2NvZGUgICAgICAgIFN0cmluZz8KICB2ZW5kb3JfcHJvZHVjdF9jb2RlIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgIFN0cmluZz8KICBpbnRyYV9jb2RlICAgICAgICAgIEludD8KICBjb3VudHJ5X29mX29yaWdpbiAgIFN0cmluZz8KICB1c2h0c19jb2RlICAgICAgICAgIEJpZ0ludD8KICB1c2VjY25fbnVtYmVyICAgICAgIFN0cmluZz8KICBwYWNrYWdlZF93ZWlnaHRfa2cgIERlY2ltYWw/CiAgcGFja2FnZWRfd2lkdGhfbW0gICBJbnQKICBwYWNrYWdlZF9sZW5ndGhfbW0gIEludAogIHBhY2thZ2VkX2hlaWdodF9tbSAgSW50CiAgZGVsaXZlcmFibGUgICAgICAgICBTdHJpbmc/CgogIEBAc2NoZW1hKCJhcHAiKQp9Cgptb2RlbCBwcm9kdWN0X3ZlbmRvcl9wcm9kdWN0X2luZm9ybWF0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgIEBpZAogIHByb2R1Y3RfY29kZSAgICAgICAgICAgIFN0cmluZz8KICB2ZW5kb3JfcHJvZHVjdF9jb2RlICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHZlbmRvcl9wcm9kdWN0X2NhdGVnb3J5IFN0cmluZz8KICB2ZW5kb3JfcHJvZHVjdF9mYW1pbHkgICBTdHJpbmc/CiAgdmVuZG9yX3Byb2R1Y3RfbGluZSAgICAgU3RyaW5nPwogIHZlbmRvcl9wcm9kdWN0X3R5cGUgICAgIFN0cmluZz8KICB2ZW5kb3JfbWF0ZXJpYWxfdHlwZSAgICBTdHJpbmc/CgogIEBAc2NoZW1hKCJhcHAiKQp9Cgptb2RlbCBtYXN0ZXJfZGF0YV92ZW5kb3JzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgQGlkCiAgY29kZSAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUKICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBkZWZhdWx0X21haW50ZW5hbmNlX2NhdGVnb3J5IFN0cmluZz8KCiAgQEBzY2hlbWEoImFwcCIpCn0KCm1vZGVsIG1hc3Rlcl9kYXRhX3VzaHRzX2NvZGVzIHsKICBpZCAgICAgICAgICBCaWdJbnQgIEBpZAogIGRlc2NyaXB0aW9uIFN0cmluZz8KCiAgQEBzY2hlbWEoImFwcCIpCn0KCm1vZGVsIG1hc3Rlcl9kYXRhX3VzZWNjbl9udW1iZXJzIHsKICBpZCAgICAgICAgICBJbnQgICAgIEBpZAogIGNvZGUgICAgICAgIFN0cmluZyAgQHVuaXF1ZQogIGRlc2NyaXB0aW9uIFN0cmluZz8KCiAgQEBzY2hlbWEoImFwcCIpCn0KCm1vZGVsIG1hc3Rlcl9kYXRhX2ludHJhc3RhdF9jb2RlcyB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICBAaWQKICBkZXNjcmlwdGlvbl9kZSAgICAgU3RyaW5nPwogIGRlc2NyaXB0aW9uX2VuICAgICBTdHJpbmc/CiAgc3VwcGxlbWFudGFyeV91bml0IFN0cmluZz8KICBlZmZlY3RpdmVfZGF0ZSAgICAgRGF0ZVRpbWU/CiAgZXhwaXJlZF9kYXRlICAgICAgIERhdGVUaW1lPwogIHByZWRlY2Vzc29yICAgICAgICBJbnQ/CgogIEBAc2NoZW1hKCJhcHAiKQp9Cgptb2RlbCBtYXN0ZXJfZGF0YV9lcnBfcHJvZHVjdF9jYXRlZ29yeSB7CiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICBAaWQKICBjb2RlICAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUKICBuYW1lICAgICAgICAgICAgICBTdHJpbmc/CiAgZGVzY3JpcHRpb24gICAgICAgU3RyaW5nPwogIGlzX3JlbmV3YWJsZSAgICAgIEJvb2xlYW4KICBpc19pbnRyYV9yZWxldmFudCBCb29sZWFuCgogIEBAc2NoZW1hKCJhcHAiKQp9Cgptb2RlbCBtYXN0ZXJfZGF0YV9kZWxpdmVyYWJsZXMgewogIGlkICAgICAgICAgIEludCAgICAgQGlkCiAgY29kZSAgICAgICAgU3RyaW5nPyBAdW5pcXVlCiAgbmFtZSAgICAgICAgU3RyaW5nPwogIGRlc2NyaXB0aW9uIFN0cmluZz8KCiAgQEBzY2hlbWEoImFwcCIpCn0KCm1vZGVsIGFkbWluX3NoZWV0X25hbWVzIHsKICBpZCAgICAgICAgICBJbnQgICAgIEBpZAogIHZlbmRvcl9pZCAgIEludAogIHNoZWV0X25hbWUgIFN0cmluZwogIGFjdGl2ZSAgICAgIEJvb2xlYW4KICBjdXJyZW5jeV9pZCBJbnQKICBpc19leGFjdCAgICBCb29sZWFuCgogIEBAc2NoZW1hKCJpbXBvcnQiKQp9Cgptb2RlbCBhZG1pbl9zaGVldF9jb25maWcgewogIGlkICAgICAgICAgICBJbnQgQGlkCiAgdmVuZG9yX2lkICAgIEludAogIHNoZWV0X2lkICAgICBJbnQgQHVuaXF1ZQogIHN0YXJ0X2NvbHVtbiBJbnQKICBlbmRfY29sdW1uICAgSW50CiAgc3RhcnRfcm93ICAgIEludAogIGVuZF9yb3cgICAgICBJbnQKCiAgQEBzY2hlbWEoImltcG9ydCIpCn0KCm1vZGVsIGFkbWluX2F0dHJpYnV0ZV9sb29rdXAgewogIGlkICAgICAgICAgICBJbnQgICAgIEBpZAogIHZlbmRvcl9pZCAgICBJbnQKICBzaGVldF9pZCAgICAgSW50CiAgc3FsX25hbWUgICAgIFN0cmluZwogIGV4Y2VsX25hbWUgICBTdHJpbmcKICBpc19tYW5kYXRvcnkgQm9vbGVhbgoKICBAQHNjaGVtYSgiaW1wb3J0IikKfQoKbW9kZWwganVuX21pc3QgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkKG1hcDogIlBLX19qdW5pcGVyX19fMzIxM0U4M0Y0RkIyMzU4RCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjaGFuZ2VfdHlwZSAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigxKQogIHByb2R1Y3RfY2F0ZWdvcnkgICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvZHVjdF9mYW1pbHkgICAgICAgICAgICAgICAgIFN0cmluZz8KICBwcm9kdWN0X2xpbmUgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHByb2R1Y3RfbnVtYmVyICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLk5WYXJDaGFyKDEwMCkKICBwcm9kdWN0X3R5cGUgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHByb2R1Y3RfY29tcGF0aWJpbGl0eSAgICAgICAgICBTdHJpbmc/CiAgbWF0ZXJpYWxfdHlwZSAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBzZXJ2aWNlX3R5cGUgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigyNTUpCiAgbG9uZ19kZXNjcmlwdGlvbiAgICAgICAgICAgICAgIFN0cmluZz8KICBzaG9ydF9kZXNjcmlwdGlvbiAgICAgICAgICAgICAgU3RyaW5nPwogIHByb2R1Y3RfbGlzdF9wcmljZSAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDI1NSkKICBzZXJ2aWNlX3ByaWNlX2NhdF8xICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigxMDApCiAgc2VydmljZV9wcmljZV9jYXRfMiAgICAgICAgICAgIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMTAwKQogIHNlcnZpY2VfcHJpY2VfY2F0XzMgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDEwMCkKICBzZXJ2aWNlX3ByaWNlX2NhdF80ICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigxMDApCiAgZGlzY291bnRhYmxlICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigzKQogIHN0b2NrYWJsZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMykKICBtYXRlcmlhbF9zdGF0dXMgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigyNTUpCiAgcGFydG5lcl9jZXJ0aWZpY2F0aW9uX2xldmVsICAgIFN0cmluZz8KICBwYXJ0bmVyX3Byb2R1Y3Rfc3BlY2lhbGl6YXRpb24gU3RyaW5nPwogIGxhc3Rfb3JkZXJfZGF0ZSAgICAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBlb2xfcmVwbGFjZW1lbnQgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigyNTUpCiAgc2VyaWFsaXplZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigzKQogIGNvdW50cnlfb2Zfb3JpZ2luICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDI1NSkKICBjY2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHVzX2VjY24gICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgdXNfaHRzICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBwYWNrYWdlZF9ncm9zc193ZWlnaHRfbGJzICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwYWNrYWdlZF9oZWlnaHRfaW4gICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwYWNrYWdlZF93aWR0aF9pbiAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwYWNrYWdlZF9sZW5ndGhfaW4gICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwcmljZV9ib29rX2RhdGUgICAgICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgb3JkZXJpbmdfbm90ZSAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMTAwMCkKICB1c2VyX2VtYWlsICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkKCiAgQEBzY2hlbWEoImltcG9ydCIpCn0KCm1vZGVsIGp1bl9wcmljZV9saXN0IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZChtYXA6ICJQS19fanVuaXBlcl9fXzMyMTNFODNGRTJBMzcxODMiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY2hhbmdlX3R5cGUgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxKQogIHByb2R1Y3RfY2F0ZWdvcnkgICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvZHVjdF9mYW1pbHkgICAgICAgICAgICAgICAgIFN0cmluZz8KICBwcm9kdWN0X2xpbmUgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHByb2R1Y3RfbnVtYmVyICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMTAwKQogIHByb2R1Y3RfdHlwZSAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvZHVjdF9jb21wYXRpYmlsaXR5ICAgICAgICAgIFN0cmluZz8KICBtYXRlcmlhbF90eXBlICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHNlcnZpY2VfdHlwZSAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDI1NSkKICBsb25nX2Rlc2NyaXB0aW9uICAgICAgICAgICAgICAgU3RyaW5nPwogIHNob3J0X2Rlc2NyaXB0aW9uICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvZHVjdF9saXN0X3ByaWNlICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgc2VydmljZV9wcmljZV9jYXRfMSAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgc2VydmljZV9wcmljZV9jYXRfMiAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgc2VydmljZV9wcmljZV9jYXRfMyAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgc2VydmljZV9wcmljZV9jYXRfNCAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgZGlzY291bnRhYmxlICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigzKQogIHN0b2NrYWJsZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMykKICBtYXRlcmlhbF9zdGF0dXMgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigyNTUpCiAgcGFydG5lcl9jZXJ0aWZpY2F0aW9uX2xldmVsICAgIFN0cmluZz8KICBwYXJ0bmVyX3Byb2R1Y3Rfc3BlY2lhbGl6YXRpb24gU3RyaW5nPwogIGxhc3Rfb3JkZXJfZGF0ZSAgICAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBlb2xfcmVwbGFjZW1lbnQgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigyNTUpCiAgc2VyaWFsaXplZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigzKQogIGNvdW50cnlfb2Zfb3JpZ2luICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDI1NSkKICBjY2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHVzX2VjY24gICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgdXNfaHRzICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBwYWNrYWdlZF9ncm9zc193ZWlnaHRfbGJzICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwYWNrYWdlZF9oZWlnaHRfaW4gICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwYWNrYWdlZF93aWR0aF9pbiAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwYWNrYWdlZF9sZW5ndGhfaW4gICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwcmljZV9ib29rX2RhdGUgICAgICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgdXNlcl9lbWFpbCAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAZGIuTlZhckNoYXIoMjU1KQoKICBAQHNjaGVtYSgiaW1wb3J0IikKfQoKbW9kZWwganVuX3JlbmV3YWwgewogIGlkICAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZChtYXA6ICJQS19fanVuaXBlcl9fXzMyMTNFODNGQUNEMTM3MUYiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcHJvZHVjdF9udW1iZXIgICAgICBTdHJpbmcgICAgQGRiLk5WYXJDaGFyKDEwMCkKICBzZXJ2aWNlX3R5cGUgICAgICAgIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMjU1KQogIGRlc2NyaXB0aW9uICAgICAgICAgU3RyaW5nPwogIHNlcnZpY2VfcHJpY2VfY2F0XzEgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigxMDApCiAgc2VydmljZV9wcmljZV9jYXRfMiBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDEwMCkKICBzZXJ2aWNlX3ByaWNlX2NhdF8zIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMTAwKQogIHNlcnZpY2VfcHJpY2VfY2F0XzQgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigxMDApCiAgbGFzdF9vcmRlcl9kYXRlICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBlbmRfb2Zfc2VydmljZV9kYXRlIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgdXNlcl9lbWFpbCAgICAgICAgICBTdHJpbmcgICAgQGRiLk5WYXJDaGFyKDI1NSkKCiAgQEBzY2hlbWEoImltcG9ydCIpCn0KCm1vZGVsIHZlbmRvciB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICAgQGlkCiAgY29kZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBzdHJlZXQgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICB6aXAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjb3VudHJ5X2NvZGUgICAgICAgICAgICAgIFN0cmluZz8KICBkZWZhdWx0X21haW50X2NhdGVnb3J5X2lkIEludD8KICBjcmVhdGVkICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIGNoYW5nZWQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgcnYgICAgICAgICAgICAgICAgICAgICAgICBVbnN1cHBvcnRlZCgidGltZXN0YW1wIikKCiAgQEBzY2hlbWEoImRibyIpCn0KCm1vZGVsIHVwZGF0ZV9vcGVuX3RyYW5zYWN0aW9ucyB7CiAgdHJhbnNhY3Rpb25faWQgIFN0cmluZyAgIEB1bmlxdWUgQGRiLlVuaXF1ZUlkZW50aWZpZXIKICB0cmFuc2FjdGlvbl9tc2cgU3RyaW5nPyAgQGRiLk5WYXJDaGFyKDEwMDApCiAgdXNlcl90YWcgICAgICAgIFN0cmluZyAgIEBkYi5OVmFyQ2hhcigyNTUpCiAgdHJhbnNhY3Rpb25fdGFnIFN0cmluZz8gIEBkYi5WYXJDaGFyKDEwMCkKICBjcmVhdGVkICAgICAgICAgRGF0ZVRpbWUgQGRiLkRhdGVUaW1lMgogIHN0YXR1c19jb2RlICAgICBJbnQgICAgICBAZGIuVGlueUludAogIHN0YXR1c19uYW1lICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigxMDApCgogIEBAc2NoZW1hKCJhcHAiKQp9Cgptb2RlbCB1cGRhdGVfc3RhZ2VkX2ZpZWxkX2NoYW5nZXMgewogIHJlY29yZF9pZCAgICAgIFN0cmluZyAgQHVuaXF1ZSBAZGIuVW5pcXVlSWRlbnRpZmllcgogIHRyYW5zYWN0aW9uX2lkIFN0cmluZyAgQHVuaXF1ZSBAZGIuVW5pcXVlSWRlbnRpZmllcgogIHZlbmRvcl9jb2RlICAgIFN0cmluZz8gQGRiLlZhckNoYXIoMTApCiAgcHJvZHVjdF9jb2RlICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMDApCiAgZmllbGRfbmFtZSAgICAgU3RyaW5nICBAZGIuVmFyQ2hhcigyNCkKICBmaWVsZF9jYXRlZ29yeSBTdHJpbmcgIEBkYi5WYXJDaGFyKDIxKQogIGN1cnJlbnRfdmFsdWUgIFN0cmluZz8gQGRiLk5WYXJDaGFyKDEwMDApCiAgbmV3X3ZhbHVlICAgICAgU3RyaW5nPyBAZGIuTlZhckNoYXIoMTAwMCkKICBjaGFuZ2VfdHlwZSAgICBTdHJpbmcgIEBkYi5WYXJDaGFyKDcpCgogIEBAc2NoZW1hKCJhcHAiKQp9Cgptb2RlbCB1cGRhdGVfc3RhZ2VkX3JlY29yZHMgewogIHJlY29yZF9pZCAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZSBAZGIuVW5pcXVlSWRlbnRpZmllcgogIHRyYW5zYWN0aW9uX2lkICAgICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZSBAZGIuVW5pcXVlSWRlbnRpZmllcgogIGlzX25ld19wcm9kdWN0ICAgICAgICAgICAgICBCb29sZWFuPyAgQGRiLkJpdAogIHZlbmRvcl9jb2RlICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTApCiAgdmVuZG9yX2lkICAgICAgICAgICAgICAgICAgIEludD8gICAgICBAZGIuSW50CiAgcHJvZHVjdF9jb2RlICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgcHJvZHVjdF9pZCAgICAgICAgICAgICAgICAgIEludD8gICAgICBAZGIuSW50CiAgbG9uZ19kZXNjICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMTAwMCkKICBzaG9ydF9kZXNjICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5OVmFyQ2hhcigxMDApCiAgcHJvZHVjdF9jYXRlZ29yeSAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgcHJvZHVjdF9jYXRlZ29yeV9pZCAgICAgICAgIEludD8gICAgICBAZGIuSW50CiAgcHJvZHVjdF9mYW1pbHkgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuTlZhckNoYXIoMTAwKQogIHByb2R1Y3RfZmFtaWx5X2lkICAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIHByb2R1Y3RfbGluZSAgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLk5WYXJDaGFyKDEwMCkKICBwcm9kdWN0X2xpbmVfaWQgICAgICAgICAgICAgSW50PyAgICAgIEBkYi5JbnQKICBwcm9kdWN0X3R5cGUgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBwcm9kdWN0X3R5cGVfaWQgICAgICAgICAgICAgSW50PyAgICAgIEBkYi5JbnQKICBtYXRlcmlhbF90eXBlICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBtYXRlcmlhbF90eXBlX2lkICAgICAgICAgICAgSW50PyAgICAgIEBkYi5JbnQKICBlcnBfY2F0ZWdvcnkgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBlcnBfY2F0ZWdvcnlfaWQgICAgICAgICAgICAgSW50PyAgICAgIEBkYi5JbnQKICBlcnBfbWFpbnRlbmFuY2VfY2F0ZWdvcnkgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEwMCkKICBlcnBfbWFpbnRlbmFuY2VfY2F0ZWdvcnlfaWQgSW50PyAgICAgIEBkYi5JbnQKICBjdXJyZW5jeV9jb2RlICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5DaGFyKDMpCiAgY3VycmVuY3lfaWQgICAgICAgICAgICAgICAgIEludD8gICAgICBAZGIuSW50CiAgbGlzdF9wcmljZSAgICAgICAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuTW9uZXkKICBhbHRfcHJpY2VfMSAgICAgICAgICAgICAgICAgRmxvYXQ/ICAgIEBkYi5Nb25leQogIGFsdF9wcmljZV8yICAgICAgICAgICAgICAgICBGbG9hdD8gICAgQGRiLk1vbmV5CiAgYWx0X3ByaWNlXzMgICAgICAgICAgICAgICAgIEZsb2F0PyAgICBAZGIuTW9uZXkKICBhbHRfcHJpY2VfNCAgICAgICAgICAgICAgICAgRmxvYXQ/ICAgIEBkYi5Nb25leQogIHByaWNlX2Jvb2tfZGF0ZSAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBpc19zY2FsZWFibGUgICAgICAgICAgICAgICAgQm9vbGVhbj8gIEBkYi5CaXQKICBpc19zZXJpYWxpemVkICAgICAgICAgICAgICAgQm9vbGVhbj8gIEBkYi5CaXQKICBpbnRyYV9jb2RlICAgICAgICAgICAgICAgICAgSW50PyAgICAgIEBkYi5JbnQKICB1c19odHNfY29kZSAgICAgICAgICAgICAgICAgQmlnSW50PyAgIEBkYi5CaWdJbnQKICB1c19lY2NuX2NvZGUgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDEyKQogIHVzX2VjY25fY29kZV9pZCAgICAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIGVvbF9kYXRlICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLkRhdGUKICBlb3NfZGF0ZSAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgbGFzdF9vcmRlcl9kYXRlICAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuRGF0ZQogIHBhY2thZ2VkX3dlaWdodF9rZyAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIHBhY2thZ2VkX2xlbmd0aF9tbSAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIHBhY2thZ2VkX3dpZHRoX21tICAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIHBhY2thZ2VkX2hlaWdodF9tbSAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIGR1cmF0aW9uX2NvZGUgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIGR1cmF0aW9uX2lkICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAogIGRlbGl2ZXJhYmxlX2NvZGUgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMTAwKQogIGRlbGl2ZXJhYmxlX2lkICAgICAgICAgICAgICBJbnQ/ICAgICAgQGRiLkludAoKICBAQHNjaGVtYSgiYXBwIikKfQoKbW9kZWwgYXBwbGljYXRpb25fZmllbGRfbmFtZXMgewogIHNjaGVtYV9pZCAgICAgICBJbnQgICAgIEBkYi5JbnQKICBzY2hlbWFfbmFtZSAgICAgU3RyaW5nPyBAZGIuTlZhckNoYXIoMTI4KQogIG9iamVjdF9pZCAgICAgICBJbnQgICAgIEBkYi5JbnQKICB0YWJsZV9uYW1lICAgICAgU3RyaW5nCiAgZnVsbF90YWJsZV9uYW1lIFN0cmluZz8gQGRiLk5WYXJDaGFyKDEwMDApCiAgY29sdW1uX2lkICAgICAgIEludCAgICAgQGRiLkludAogIGNvbHVtbl9uYW1lICAgICBTdHJpbmcKICBmcmllbmRseV9uYW1lICAgU3RyaW5nICBAZGIuTlZhckNoYXIoMjU1KQoKICBAQHVuaXF1ZShbdGFibGVfbmFtZSwgY29sdW1uX25hbWVdKQogIEBAc2NoZW1hKCJhcHAiKQp9Cg==",
  "inlineSchemaHash": "10efd3ccdeb03b042655a341c3a875a0d953246c6e9ea02e57841c38bf49d228",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"products\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"short_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_renewable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_intra_relevant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_serialized\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maintenance_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eol_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eos_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_order_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_standard_list_price\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"list_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_book_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_1_tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_2_tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_3_tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_4_tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alternative_price_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_shipment_information\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"intra_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_of_origin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ushts_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"useccn_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_weight_kg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_width_mm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_length_mm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_height_mm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliverable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product_vendor_product_information\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_line\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_product_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_material_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_data_vendors\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_maintenance_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_data_ushts_codes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_data_useccn_numbers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_data_intrastat_codes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description_de\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supplemantary_unit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effective_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expired_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"predecessor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_data_erp_product_category\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_renewable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_intra_relevant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"master_data_deliverables\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin_sheet_names\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sheet_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_exact\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin_sheet_config\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sheet_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_column\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_column\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_row\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_row\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin_attribute_lookup\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sheet_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sql_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"excel_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_mandatory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jun_mist\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_line\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_compatibility\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"short_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_list_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discountable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner_certification_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner_product_specialization\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_order_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eol_replacement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serialized\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_of_origin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ccat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_eccn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_hts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_gross_weight_lbs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_height_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_width_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_length_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_book_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordering_note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jun_price_list\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_line\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_compatibility\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"short_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_list_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discountable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner_certification_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partner_product_specialization\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_order_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eol_replacement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serialized\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_of_origin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ccat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_eccn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_hts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_gross_weight_lbs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_height_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_width_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_length_in\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_book_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jun_renewal\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price_cat_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_order_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_of_service_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vendor\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"street\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_maint_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"update_open_transactions\":{\"dbName\":null,\"fields\":[{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_msg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"update_staged_field_changes\":{\"dbName\":null,\"fields\":[{\"name\":\"record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"new_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"update_staged_records\":{\"dbName\":null,\"fields\":[{\"name\":\"record_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_new_product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long_desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"short_desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_family\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_family_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_line\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_line_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"erp_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"erp_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"erp_maintenance_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"erp_maintenance_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"list_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_price_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_price_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_price_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alt_price_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_book_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_scaleable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_serialized\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"intra_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_hts_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_eccn_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"us_eccn_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eol_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eos_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_order_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_weight_kg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_length_mm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_width_mm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packaged_height_mm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliverable_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deliverable_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"application_field_names\":{\"dbName\":null,\"fields\":[{\"name\":\"schema_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schema_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"column_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"column_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendly_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"table_name\",\"column_name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"table_name\",\"column_name\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    SQLSERVER_URL: typeof globalThis !== 'undefined' && globalThis['SQLSERVER_URL'] || typeof process !== 'undefined' && process.env && process.env.SQLSERVER_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

