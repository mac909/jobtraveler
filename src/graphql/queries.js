/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      customer
      partNumber_Description
      PODate
      poDueDate
      quantity
      priceperunit
      OPS_Saw
      OPS_Laser
      OPS_Bend
      OPS_Mach
      OPS_Weld
      OPS_Pack
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customer
        partNumber_Description
        PODate
        poDueDate
        quantity
        priceperunit
        OPS_Saw
        OPS_Laser
        OPS_Bend
        OPS_Mach
        OPS_Weld
        OPS_Pack
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
