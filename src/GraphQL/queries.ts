import { gql } from "graphql-request";
import { fetchGql } from "./client";
import {
  Calendar,
  Customer,
  CustomerUpdateInput,
  CustomerWhereUniqueInput,
  GetCustomerQuery,
  GetCustomerQueryVariables,
  ListCalendarsQuery,
  ListCalendarsQueryVariables,
  UpdateCustomerMutation,
  UpdateCustomerMutationVariables,
} from "./types";

export const clientId = "cm0b8kilabkyu0783rc2uuzax";

export const getCustomer = async (
  variables: GetCustomerQueryVariables
): Promise<Customer | undefined> => {
  const query = gql`
    query GetCustomer($id: String!) {
      getCustomer(where: { id: $id }) {
        id
        name
        surname
        phone
        email
        address
        locale
        picture {
          id
          secret
        }
      }
    }
  `;
  const data = await fetchGql<GetCustomerQuery>(query, variables);
  return data?.getCustomer ?? undefined;
};

export const getReservationsPart = async (
  variables?: ListCalendarsQueryVariables
): Promise<Calendar[] | undefined> => {
  const query = gql`
    query ListCalendars(
      $where: CalendarWhereInput
      $orderBy: CalendarOrderByInput
      $take: Int
    ) {
      listCalendars(where: $where, orderBy: $orderBy, take: $take) {
        from
        to
        shop {
          name

          address {
            city
            street
          }
          phone
        }
        carts {
          name
          price
          item {
            duration
            picture {
              secret
            }
          }
        }
        subject {
          microsite {
            logo {
              secret
            }
          }
        }
      }
    }
  `;
  const data = await fetchGql<ListCalendarsQuery>(query, variables);
  return data?.listCalendars;
};

export const getReservationsFull = async (
  variables?: ListCalendarsQueryVariables
): Promise<Calendar[] | undefined> => {
  const query = gql`
    query ListCalendars(
      $where: CalendarWhereInput
      $orderBy: CalendarOrderByInput
    ) {
      listCalendars(where: $where, orderBy: $orderBy) {
        id
        capacity
        eventType
        carts {
          id
          name
          count
          price
          priceVat
          vat
          item {
            id
            name
            color
            code
            picture {
              id
              secret
            }
          }
        }
        createdAt
        employees {
          id
          color
          showCstContact
          notifyPhone
          receiptName
          userMyFox {
            id
            name
            surname
            email
            phone
            locale
            address
            userPicture {
              id
              secret
            }
          }
        }
        from
        to
        note
        shop {
          id
          name
          address {
            street
            city
            zip
            country
          }
          email
          phone
        }
        subject {
          id
          name
          marketingName
          alias
          microsite {
            logo {
              id
              secret
            }
          }
        }
        state
        updatedAt
        isOnlineReservation
        canBeCancelUntil
      }
    }
  `;
  const data = await fetchGql<ListCalendarsQuery>(query, variables);
  return data?.listCalendars;
};

export const updateCustomer = async (
  data: CustomerUpdateInput,
  where: CustomerWhereUniqueInput
): Promise<Customer | undefined> => {
  const mutation = gql`
    mutation UpdateCustomer(
      $data: CustomerUpdateInput!
      $where: CustomerWhereUniqueInput!
    ) {
      updateCustomer(data: $data, where: $where) {
        id
        name
        surname
        phone
        email
        address
        locale
        picture {
          id
          secret
        }
      }
    }
  `;

  const variables: UpdateCustomerMutationVariables = { data, where };
  const result = await fetchGql<UpdateCustomerMutation>(mutation, variables);
  return result?.updateCustomer ?? undefined;
};
