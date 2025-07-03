export class CreateMemberDto {
  name: string;
  phoneNumber: number;
  designation: 'president' | 'member' | 'secretary' | 'treasurer';
  // designation: string;
  fatherOrHusbandName: string;
  category: 'ST' | 'SC' | 'OBC' | 'General' | 'Other';
  disability: boolean;
  religion: 'Hindu' | 'Muslim' | 'Tribes' | 'Christian' | 'Other';
  gender: 'Male' | 'Female' | 'Other';
  accountAvailable: boolean;
}
