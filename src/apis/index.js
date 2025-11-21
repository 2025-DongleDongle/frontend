// 공통 axios 인스턴스
export { default as api } from "./api";

// accounts
export * as AuthAPI from "./accounts/auth";
export * as SignupAPI from "./accounts/signup";
export * as ProfileAPI from "./accounts/profile";
export * as CountriesAPI from "./accounts/countries";
export * as UniversitiesAPI from "./accounts/universities";
export * as ExchangeUniversitiesAPI from "./accounts/exchange-universities";

// budgets
export * as BudgetAPI from "./budgets/budget";

// feeds
export * as FeedsAPI from "./feeds/feeds";
export * as FeedsActionAPI from "./feeds/feedsAction";

// ledgers
export * as LedgersAPI from "./ledgers/ledgers";

// rates
export * as RatesAPI from "./rates/rates";

// summaries
export * as SummariesAPI from "./summaries/snapshot";