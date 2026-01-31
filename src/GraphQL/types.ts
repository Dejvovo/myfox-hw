// ---------- Scalars ----------
export type AWSDateTime = string;
export type Locale = string;
export type Currency = string;

// ---------- Enums ----------
export enum CalendarState {
  Open = 'Open',
  Paid = 'Paid',
  Canceled = 'Canceled',
  Storno = 'Storno',
  Test = 'Test',
}

export enum EventType {
  Individual = 'Individual',
  Group = 'Group',
  Unavailability = 'Unavailability',
}

export enum OrderByArg {
  ASC = 'ASC',
  DESC = 'DESC',
}

// ---------- Types ----------
export interface File {
  id: string;
  secret: string;
}

export interface UserMyFox {
  id: string;
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  surname?: string | null;
  locale?: Locale | null;
  userPicture?: File | null;
}

export interface Employee {
  id: string;
  color?: string | null;
  showCstContact: boolean;
  notifyPhone?: string | null;
  receiptName?: string | null;
  userMyFox?: UserMyFox | null;
}

export interface Address {
  street?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
}

export interface Microsite {
  logo?: File | null;
}

export interface Subject {
  id: string;
  name?: string | null;
  marketingName?: string | null;
  alias: string;
  address?: Address | null;
  microsite?: Microsite | null;
  customersLastChange?: AWSDateTime | null;
  locale?: Locale | null;
  currency?: Currency | null;
  dic?: string | null;
  ico?: string | null;
  vatPayer?: boolean | null;
}

export interface Shop {
  id: string;
  name: string;
  address?: Address | null;
  email?: string | null;
  phone?: string | null;
}

export interface Item {
  id: string;
  color: string;
  code?: string | null;
  stockEnabled?: boolean | null;
  warranty?: string | null;
  manufacturer?: string | null;
  duration?: number | null;
  pauseAfter?: number | null;
  pauseBefore?: number | null;
  name: string;
  note?: string | null;
  ord?: number | null;
  price?: number | null;
  priceVat?: number | null;
  picture?: File | null;
}

export interface Cart {
  id: string;
  count?: number | null;
  item?: Item | null;
  name: string;
  price?: number | null;
  priceVat: number;
  vat: number;
}

export interface Calendar {
  id: string;
  capacity?: number | null;
  eventType: EventType;
  carts?: Cart[] | null;
  createdAt: AWSDateTime;
  employees?: Employee[] | null;
  from?: AWSDateTime | null;
  to?: AWSDateTime | null;
  note?: string | null;
  shop?: Shop | null;
  subject?: Subject | null;
  state: CalendarState;
  updatedAt: AWSDateTime;
  isOnlineReservation?: boolean | null;
  canBeCancelUntil?: AWSDateTime | null;
}

export interface Customer {
  id: string;
  createdAt: AWSDateTime;
  name?: string | null;
  surname?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  locale?: Locale | null;
  picture?: File | null;
}

// ---------- Query Input Types ----------
export interface CustomerWhereUniqueInput {
  id?: string | null;
}

// ---------- Filters for Relations ----------
export interface CustomerFilter {
  some?: CustomerWhereInputWithoutNullables | null;
  every?: CustomerWhereInputWithoutNullables | null;
  none?: CustomerWhereInputWithoutNullables | null;
}

export interface EmployeeFilter {
  some?: EmployeeWhereInputWithoutNullables | null;
  every?: EmployeeWhereInputWithoutNullables | null;
  none?: EmployeeWhereInputWithoutNullables | null;
}

export interface CartFilter {
  some?: CartWhereInputWithoutNullables | null;
  every?: CartWhereInputWithoutNullables | null;
  none?: CartWhereInputWithoutNullables | null;
}

// ---------- CustomerWhereInputWithoutNullables ----------
export interface CustomerWhereInputWithoutNullables {
  id?: StringFilter | null;
  createdAt?: AWSDateTimeFilter | null;
  star?: BooleanFilter | null;
  updatedAt?: AWSDateTimeFilter | null;
  warning?: BooleanFilter | null;
  name?: StringFilter | null;
  surname?: StringFilter | null;
  phone?: StringFilter | null;
  email?: StringFilter | null;
}

// ---------- EmployeeWhereInputWithoutNullables ----------
export interface EmployeeWhereInputWithoutNullables {
  id?: StringFilter | null;
  color?: StringFilter | null;
  createdAt?: AWSDateTimeFilter | null;
  bookEnabled?: BooleanFilter | null;
  showCstContact?: BooleanFilter | null;
  notifyPhone?: StringFilter | null;
  ord?: IntNullableFilter | null;
  receiptName?: StringFilter | null;
}

// ---------- CartWhereInputWithoutNullables ----------
export interface CartWhereInputWithoutNullables {
  id?: StringFilter | null;
  count?: IntNullableFilter | null;
  createdAt?: AWSDateTimeFilter | null;
  name?: StringFilter | null;
  price?: FloatFilter | null;
  priceVat?: FloatFilter | null;
  vat?: FloatFilter | null;
  updatedAt?: AWSDateTimeFilter | null;
}

export interface CalendarWhereInput {
  id?: StringFilter | null;
  capacity?: IntNullableFilter | null;
  customers?: CustomerFilter | null;
  employees?: EmployeeFilter | null;
  state?: CalendarStateEnumFilter | null;
  carts?: CartFilter | null;
  from?: AWSDateTimeFilter | null;
  to?: AWSDateTimeFilter | null;
  eventType?: EventTypeEnumFilter | null;
}

export interface CalendarOrderByInput {
  id?: OrderByArg | null;
  billNumber?: OrderByArg | null;
  capacity?: OrderByArg | null;
  createdAt?: OrderByArg | null;
  from?: OrderByArg | null;
  note?: OrderByArg | null;
  paidAt?: OrderByArg | null;
  payType?: OrderByArg | null;
  eventType?: OrderByArg | null;
  state?: OrderByArg | null;
  to?: OrderByArg | null;
  updatedAt?: OrderByArg | null;
}

// ---------- Filter Types ----------
export interface StringFilter {
  equals?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  not?: StringFilter | null;
  mode?: string | null;
}

export interface IntNullableFilter {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  not?: IntNullableFilter | null;
  isNull?: boolean | null;
}

export interface FloatFilter {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  not?: FloatFilter | null;
  isNull?: boolean | null;
}

export interface BooleanFilter {
  equals?: boolean | null;
  not?: BooleanFilter | null;
}

export interface AWSDateTimeFilter {
  equals?: AWSDateTime | null;
  gt?: AWSDateTime | null;
  gte?: AWSDateTime | null;
  lt?: AWSDateTime | null;
  lte?: AWSDateTime | null;
  in?: AWSDateTime[] | null;
  notIn?: AWSDateTime[] | null;
  not?: AWSDateTimeFilter | null;
}

export interface CalendarStateEnumFilter {
  equals?: CalendarState | null;
  in?: CalendarState[] | null;
  not?: CalendarStateEnumFilter | null;
  notIn?: CalendarState[] | null;
}

export interface EventTypeEnumFilter {
  equals?: EventType | null;
  in?: EventType[] | null;
  not?: EventTypeEnumFilter | null;
  notIn?: EventType[] | null;
}

// ---------- Customer Query Types ----------
export interface GetCustomerQueryVariables {
  id: string;
}

export interface GetCustomerQuery {
  getCustomer?: Customer | null;
}

// ---------- ListCalendars Query Types ----------
export interface ListCalendarsQueryVariables {
  where?: CalendarWhereInput | null;
  orderBy?: CalendarOrderByInput | null;
}

export interface ListCalendarsQuery {
  listCalendars: Calendar[];
}

// ---------- Mutation Types ----------
export interface CustomerUpdateInput {
  name?: string | null;
  surname?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  locale?: Locale | null;
}

export interface UpdateCustomerMutationVariables {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface UpdateCustomerMutation {
  updateCustomer?: Customer | null;
}
