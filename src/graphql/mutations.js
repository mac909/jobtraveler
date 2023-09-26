/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
