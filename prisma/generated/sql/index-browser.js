
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
