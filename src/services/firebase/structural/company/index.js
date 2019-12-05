import { fs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 04-12-2019
 */
export const getCompanyConfig = companyId => {
  return fs
    .collection("companiesConfig")
    .doc(companyId)
    .get();
};
