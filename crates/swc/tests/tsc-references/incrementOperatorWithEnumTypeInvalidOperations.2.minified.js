//// [incrementOperatorWithEnumTypeInvalidOperations.ts]
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[11:1]
//!  11 | var ResultIsNumber4 = ENUM1++;
//!  12 | 
//!  13 | // enum type expressions
//!  14 | var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
//!     :                         ^^^^^^^^^^^^^^^^^^^
//!  15 | var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;
//!  16 | 
//!  17 | // miss assignment operator
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[12:1]
//!  12 | 
//!  13 | // enum type expressions
//!  14 | var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
//!  15 | var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;
//!     :                       ^^^^^^^^^^^^^^^^^^^
//!  16 | 
//!  17 | // miss assignment operator
//!  18 | ++ENUM;
//!     `----
