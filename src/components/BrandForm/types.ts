export interface BrandFormData {
  brandColor: string;
  logo: File | null;
  favicon: File | null;
  coverImage: File | null;
}

export interface BrandFormProps {
  data: BrandFormData;
  onChange: (data: Partial<BrandFormData>) => void;
}