import * as TablerIcons from "@tabler/icons-react";
import { Group, Modal, Pagination, SimpleGrid, Text } from "@mantine/core";
import { useState } from "react";

interface IconPickerProps {
  opened: boolean;
  onClose: () => void;
}

const iconNames = Object.keys(TablerIcons).filter(
  (key) =>
    key.startsWith("Icon") &&
    !key.endsWith("Filled") &&
    !key.startsWith("IconBrand"),
);

const limit = 75;
const total = iconNames.length;
const totalPages = Math.ceil(total / limit);

export function IconPicker({ opened, onClose }: IconPickerProps) {
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} - ${Math.min(total, limit * page)} of ${total}`;

  const visibleIconNames = iconNames.slice(
    limit * (page - 1),
    Math.min(total, limit * page) - 1,
  );

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Icon Picker"
      centered
      transitionProps={{ duration: 0 }}
    >
      <SimpleGrid cols={6}>
        {visibleIconNames.map((iconName) => {
          const IconComponent = TablerIcons[
            iconName as keyof typeof TablerIcons
          ] as TablerIcons.Icon;

          return <IconComponent />;
        })}
      </SimpleGrid>
      <Group justify="flex-end">
        <Text span size="sm">
          {message}
        </Text>
        <Pagination
          total={totalPages}
          value={page}
          onChange={setPage}
          withPages={false}
        />
      </Group>
    </Modal>
  );
}
